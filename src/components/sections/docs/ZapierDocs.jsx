"use client";

import { useEffect, useRef, useState } from "react";

const BASE_URL = "https://api.clientforce.io";
const APP_URL = "https://app.clientforce.io";

const ACCENT = "#35E834";
const ACCENT_DEEP = "#0F7D14";
const ACCENT_SOFT = "#EDFDEC";

const TRIGGERS = [
  {
    event: "contact.created",
    label: "New Contact Created",
    description: "Fires when a new contact is created in the workspace.",
    fields: [
      "workspace_id", "lead_id", "email", "first_name", "last_name",
      "phone", "user_id", "source", "timestamp",
    ],
  },
  {
    event: "contact.added_to_list",
    label: "New List Subscription",
    description: "Fires when a contact is added to a list.",
    fields: [
      "workspace_id", "lead_id", "list_id", "list_name", "email",
      "first_name", "last_name", "phone", "source", "timestamp",
    ],
  },
  {
    event: "contact.form_submitted",
    label: "Contact Form Submitted",
    description: "Fires when a contact submits one of your forms.",
    fields: [
      "workspace_id", "lead_id", "form_id", "form_title", "submission_id",
      "submission_data", "email", "first_name", "last_name", "phone", "timestamp",
    ],
  },
  {
    event: "campaign.contact.entered",
    label: "Campaign Contact Entered",
    description: "Fires when a contact enters a campaign.",
    fields: [
      "workspace_id", "membership_id", "campaign_id", "campaign_name", "lead_id",
      "email", "first_name", "last_name", "phone", "timestamp",
    ],
  },
  {
    event: "contact.interested",
    label: "Subscriber Interested",
    description: "Fires when a subscriber's reply is classified as interested.",
    fields: [
      "workspace_id", "lead_id", "campaign_id", "campaign_name", "email_message_id",
      "thread_id", "sentiment", "email", "first_name", "last_name", "phone", "timestamp",
    ],
  },
  {
    event: "proposal.viewed",
    label: "Subscriber Viewed Proposal",
    description: "Fires when a subscriber opens a proposal you sent them.",
    fields: [
      "workspace_id", "lead_id", "proposal_id", "proposal_title", "campaign_id",
      "campaign_name", "campaign_step_id", "campaign_step_number", "email",
      "first_name", "last_name", "phone", "timestamp",
    ],
  },
  {
    event: "campaign.contact.finished",
    label: "Subscriber Finished Campaign",
    description: "Fires when a subscriber reaches the end of a campaign.",
    fields: [
      "workspace_id", "membership_id", "campaign_id", "campaign_name", "source",
      "lead_id", "email", "first_name", "last_name", "phone", "timestamp",
    ],
  },
  {
    event: "email.replied",
    label: "Email Replied",
    description: "Fires when a subscriber replies to one of your emails.",
    fields: [
      "workspace_id", "lead_id", "campaign_id", "campaign_name", "email_message_id",
      "campaign_step_id", "thread_id", "subject", "text_body", "html_body",
      "email", "first_name", "last_name", "phone", "timestamp",
    ],
  },
  {
    event: "sms.replied",
    label: "SMS Replied",
    description: "Fires when a subscriber replies to one of your SMS messages.",
    fields: [
      "workspace_id", "lead_id", "campaign_id", "campaign_name", "campaign_step_id",
      "sms_message_id", "from_number", "to_number", "message", "email",
      "first_name", "last_name", "phone", "timestamp",
    ],
  },
  {
    event: "whatsapp.replied",
    label: "WhatsApp Replied",
    description: "Fires when a subscriber replies to one of your WhatsApp messages.",
    fields: [
      "workspace_id", "lead_id", "campaign_id", "campaign_name", "campaign_step_id",
      "whatsapp_message_id", "from_number", "to_number", "message", "media_url",
      "email", "first_name", "last_name", "phone", "timestamp",
    ],
  },
  {
    event: "call.completed",
    label: "Call Completed",
    description: "Fires when a call with a contact finishes.",
    fields: [
      "workspace_id", "lead_id", "call_log_id", "campaign_id", "campaign_name",
      "campaign_step_id", "duration_seconds", "recording_url", "status", "transcript",
      "email", "first_name", "last_name", "phone", "timestamp",
    ],
  },
  {
    event: "meeting.booked",
    label: "Meeting Booked",
    description: "Fires when a contact books a meeting.",
    fields: [
      "workspace_id", "lead_id", "meeting_id", "meeting_title", "scheduled_at",
      "campaign_id", "campaign_step_id", "preferred_date", "preferred_time",
      "email", "first_name", "last_name", "phone", "timestamp",
    ],
  },
  {
    event: "widget.conversation.started",
    label: "Widget Conversation Started",
    description: "Fires when a visitor starts a conversation in a chat widget.",
    fields: [
      "workspace_id", "lead_id", "widget_id", "widget_title", "conversation_id",
      "session_id", "email", "first_name", "last_name", "phone", "timestamp",
    ],
  },
  {
    event: "widget.conversation.ended",
    label: "Widget Conversation Ended",
    description: "Fires when a chat widget conversation ends.",
    fields: [
      "workspace_id", "lead_id", "widget_id", "widget_title", "conversation_id",
      "session_id", "status", "duration_seconds", "transcript", "email",
      "first_name", "last_name", "phone", "timestamp",
    ],
  },
];

const ACTIONS = [
  {
    name: "Add a Tag",
    description:
      "Attaches a tag to a contact, matched by email address. If the tag does not exist yet, it is created.",
  },
  {
    name: "Add Subscriber to List",
    description:
      "Adds a contact to a specified list. If no contact exists for the email address, one is created first.",
  },
  {
    name: "Remove Subscriber from List",
    description:
      "Removes a contact from a specified list. The contact must already exist. This action never creates one.",
  },
  {
    name: "Add Subscriber to Sequence/Agent",
    description:
      "Adds a contact to a specified campaign or sequence. If no contact exists for the email address, one is created first.",
  },
  {
    name: "Remove Subscriber from Sequence/Agent",
    description:
      "Removes a contact from a specified campaign or sequence. The contact must already exist. This action never creates one.",
  },
  {
    name: "Save Lead",
    description:
      "Creates a contact, or updates it if one already exists for the email address. Optionally attaches the contact to a list, a sequence, or both.",
  },
  {
    name: "Record a Purchase",
    description:
      "Logs a purchase event against a contact, creating the contact if one does not already exist. Purchases are deduplicated by external order ID, so re-sending the same order will not record it twice.",
  },
];

const SECTIONS = [
  { id: "overview", title: "Overview" },
  { id: "authentication", title: "Authentication" },
  { id: "workspace", title: "Workspace Header" },
  { id: "graphql", title: "GraphQL API" },
  { id: "zapier", title: "Zapier Integration" },
  { id: "triggers", title: "Triggers", sub: true },
  { id: "actions", title: "Actions", sub: true },
  { id: "webhooks", title: "Webhooks" },
  { id: "limits", title: "Rate Limits & Support" },
];

function CopyButton({ value, className = "" }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable (insecure origin / denied) — leave the button idle */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
      className={`inline-flex items-center gap-1.5 rounded-md border border-white/10 px-2.5 py-1 font-mono text-xs text-[#8a8a8a] transition-colors hover:border-white/25 hover:text-white ${className}`}
    >
      {copied ? (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="9" y="9" width="11" height="11" rx="2" />
          <path d="M5 15V5a2 2 0 0 1 2-2h10" />
        </svg>
      )}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function CodeBlock({ children, language }) {
  return (
    <div className="my-6 overflow-hidden rounded-xl bg-[#1a1a1a]">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-2">
        <span className="font-mono text-xs tracking-wide text-[#8a8a8a] uppercase">
          {language}
        </span>
        <CopyButton value={children} />
      </div>
      <pre className="overflow-x-auto px-5 py-4 font-mono text-[13px] leading-relaxed text-[#e6e6e6]">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function InlineCode({ children }) {
  return (
    <code className="rounded-md bg-[#f4f4f5] px-1.5 py-0.5 font-mono text-[0.875em] text-[#171717]">
      {children}
    </code>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-gray-200 pt-14">
      <h2
        className="font-degular mb-5 border-l-[3px] pl-4 text-2xl font-bold sm:text-3xl"
        style={{ borderColor: ACCENT }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function SubSection({ id, title, children }) {
  return (
    <div id={id} className="scroll-mt-28 pt-12">
      <h3
        className="font-degular mb-4 border-l-2 pl-3 text-xl font-bold"
        style={{ borderColor: ACCENT }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

function Callout({ title, children }) {
  return (
    <div
      className="mt-6 rounded-xl border border-l-[3px] border-gray-200 p-5"
      style={{ borderLeftColor: ACCENT, backgroundColor: ACCENT_SOFT }}
    >
      <p className="leading-relaxed text-[#3f3f46]">
        {title && <span className="font-semibold text-[#171717]">{title} </span>}
        {children}
      </p>
    </div>
  );
}

function Step({ n, title, children }) {
  return (
    <div className="relative pl-11">
      <span
        className="absolute top-0 left-0 flex h-7 w-7 items-center justify-center rounded-full font-mono text-xs font-bold text-black"
        style={{ backgroundColor: ACCENT }}
      >
        {n}
      </span>
      <h3 className="font-degular text-lg font-bold">{title}</h3>
      <div className="mt-2 space-y-4 leading-relaxed text-[#3f3f46]">{children}</div>
    </div>
  );
}

function TriggerCard({ trigger }) {
  const [open, setOpen] = useState(false);
  const panelId = `trigger-${trigger.event.replace(/\./g, "-")}`;

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 transition-colors hover:border-[#35E834]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-start gap-4 p-5 text-left transition-colors hover:bg-[#fafafa] sm:p-6"
      >
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="font-degular text-lg font-bold">{trigger.label}</span>
            <code className="rounded-md bg-[#1a1a1a] px-2 py-1 font-mono text-xs text-[#e6e6e6]">
              {trigger.event}
            </code>
          </span>
          <span className="mt-2 block leading-relaxed text-[#676767]">
            {trigger.description}
          </span>
        </span>

        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`mt-1 flex-shrink-0 text-[#676767] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div id={panelId} className="border-t border-gray-200 px-5 pt-4 pb-5 sm:px-6 sm:pb-6">
          <p className="mb-3 text-xs font-semibold tracking-wide text-[#676767] uppercase">
            Payload fields
          </p>
          <ul className="flex flex-wrap gap-2">
            {trigger.fields.map((field) => (
              <li key={field}>
                <code className="rounded-md bg-[#f4f4f5] px-2 py-1 font-mono text-xs text-[#171717]">
                  {field}
                </code>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function useActiveSection() {
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!elements.length) return;

    let frame = null;

    function update() {
      frame = null;

      // The last section still visible can never scroll past the marker line, so
      // resolve the bottom of the page to the final section directly.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        setActive(elements[elements.length - 1].id);
        return;
      }

      // Triggers and Actions are nested inside the Zapier section, so a parent is
      // still on screen while a child is active. Walking in document order and
      // keeping the last heading to cross the marker lets the child win.
      let current = elements[0].id;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= 120) current = el.id;
      }
      setActive(current);
    }

    function onScroll() {
      if (frame === null) frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return active;
}

export default function ZapierDocs() {
  const active = useActiveSection();

  return (
    <div className="bg-white text-[#171717]">
      {/* HERO */}
      <header
        className="relative overflow-hidden border-b border-gray-200"
        style={{
          backgroundImage: `radial-gradient(120% 90% at 85% 0%, ${ACCENT}26 0%, ${ACCENT}0D 35%, rgba(255,255,255,0) 70%), linear-gradient(180deg, #FBFEFA 0%, #FFFFFF 100%)`,
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(#0000000A 1px, transparent 1px), linear-gradient(90deg, #0000000A 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(80% 70% at 50% 0%, #000 0%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(80% 70% at 50% 0%, #000 0%, transparent 100%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 py-10 sm:pt-20 sm:pb-16  mt-10">
          <h1 className="font-degular text-4xl leading-tight font-extrabold sm:text-5xl">
            Clientforce Zapier Integration
          </h1>
          <p className="font-degular mt-5 max-w-6xl text-lg leading-relaxed text-[#676767]">
            How the Clientforce Zapier integration works under the hood: the OAuth
            authorization flow that connects an account, the GraphQL endpoint the app
            reads and writes through, the events that can start a Zap, and the signed
            webhooks that deliver them.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="text-sm text-[#676767]">Base URL</span>
            <code className="rounded-lg bg-[#1a1a1a] px-3 py-1.5 font-mono text-sm text-[#e6e6e6]">
              {BASE_URL}
            </code>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl px-6 pt-10 pb-16 sm:pt-16 lg:grid lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-12">
        {/* SIDEBAR NAV (desktop) */}
        <aside className="hidden lg:block">
          <nav
            aria-label="On this page"
            className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto"
          >
            <p className="font-degular mb-4 text-xs font-bold tracking-wide text-[#676767] uppercase">
              On this page
            </p>
            <ul className="space-y-0.5 border-l border-gray-200">
              {SECTIONS.map((section) => {
                const isActive = active === section.id;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className={`-ml-px block border-l-2 py-1.5 transition-colors ${
                        section.sub ? "pl-8 text-[13px]" : "pl-4 text-sm"
                      }`}
                      style={{
                        borderColor: isActive ? ACCENT : "transparent",
                        color: isActive ? ACCENT_DEEP : "#676767",
                        fontWeight: isActive ? 600 : 400,
                      }}
                    >
                      {section.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* MOBILE TOC */}
        <nav aria-label="On this page" className="mb-10 lg:hidden">
          <details className="rounded-xl border border-gray-200 bg-[#fafafa]">
            <summary className="cursor-pointer list-none px-5 py-3.5 text-sm font-semibold">
              On this page
            </summary>
            <ul className="space-y-1 border-t border-gray-200 px-5 py-4">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={`block py-1 text-[#676767] transition-colors hover:text-[#171717] ${
                      section.sub ? "pl-4 text-[13px]" : "text-sm"
                    }`}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </nav>

        <div className="min-w-0 space-y-14">
          {/* OVERVIEW */}
          <Section id="overview" title="Overview">
            <div className="space-y-4 leading-relaxed text-[#3f3f46]">
              <p>
                This guide documents the Clientforce Zapier integration: the interface
                Zapier uses to read and write the data behind your workspace (contacts,
                lists, campaigns, proposals, meetings and purchases) so your Zaps can act
                on it. It is a reference for how that integration works, not a
                general-purpose developer platform.
              </p>
              <p>
                All requests go to the API host below. Every endpoint is served over
                HTTPS, and every request must be authenticated with an OAuth2 access
                token.
              </p>
            </div>

            <CodeBlock language="Base URL">{BASE_URL}</CodeBlock>

            <p className="leading-relaxed text-[#3f3f46]">
              There are two surfaces the integration relies on most: the GraphQL endpoint
              at <InlineCode>/graphql/zapier</InlineCode> for querying and mutating data,
              and webhooks, which push events to a subscribed URL as they happen.
            </p>
          </Section>

          {/* AUTHENTICATION */}
          <Section id="authentication" title="Authentication">
            <div className="space-y-4 leading-relaxed text-[#3f3f46]">
              <p>
                Clientforce uses the OAuth2{" "}
                <span className="font-semibold text-[#171717]">authorization code</span>{" "}
                flow. The Zapier app sends the user to a Clientforce consent screen in
                their browser; they choose a workspace and grant access; Clientforce
                redirects them back to Zapier with a short-lived code, which Zapier
                exchanges for an access token server-side.
              </p>
              <p>
                This is a redirect-based flow, so it always involves a real user in a
                browser. There is no way to mint a token from client credentials alone.
              </p>
              <p>
                The <InlineCode>/oauth/zapier</InlineCode> consent screen described below
                exists specifically for the Clientforce–Zapier integration. It is{" "}
                <span className="font-semibold text-[#171717]">
                  not a self-service developer registration system
                </span>
                : there is currently no way for an arbitrary third party to register its
                own <InlineCode>client_id</InlineCode>. The{" "}
                <InlineCode>client_id</InlineCode> used throughout this section is the one
                issued for the Zapier integration.
              </p>
            </div>

            <div className="mt-10 space-y-10">
              <Step n="1" title="Zapier sends the user to the authorize URL">
                <p>
                  The user&apos;s browser is redirected to the authorization endpoint with
                  the <InlineCode>client_id</InlineCode> issued for the integration, the{" "}
                  <InlineCode>redirect_uri</InlineCode> registered against it, and a{" "}
                  <InlineCode>state</InlineCode> value generated for the attempt. All three
                  are required. <InlineCode>response_type</InlineCode> is not read from the
                  query string, because the authorization code response type is implied and
                  fixed server-side.
                </p>
                <CodeBlock language="Authorize URL">{`${APP_URL}/oauth/zapier
  ?client_id=CLIENT_ID
  &redirect_uri=REGISTERED_REDIRECT_URI
  &state=RANDOM_STATE_STRING`}</CodeBlock>
                <p>
                  The <InlineCode>state</InlineCode> value is held in the user&apos;s
                  session and checked when they come back. It is what protects the flow
                  against cross-site request forgery.
                </p>
              </Step>

              <Step n="2" title="The user logs in and picks a workspace">
                <p>
                  On the consent screen the user signs in if they are not already, then
                  selects which of their workspaces to connect. They can grant access or
                  deny it. The workspace chosen here is the one the resulting tokens will
                  act on.
                </p>
              </Step>

              <Step n="3" title="Clientforce redirects back to Zapier">
                <p>
                  If the user grants access, their browser is sent to the registered{" "}
                  <InlineCode>redirect_uri</InlineCode> with an authorization code and the
                  same <InlineCode>state</InlineCode> that was sent in step 1:
                </p>
                <CodeBlock language="Redirect (granted)">{`REGISTERED_REDIRECT_URI?code=AUTHORIZATION_CODE&state=RANDOM_STATE_STRING`}</CodeBlock>
                <p>If they deny access, the redirect carries an error instead of a code:</p>
                <CodeBlock language="Redirect (denied)">{`REGISTERED_REDIRECT_URI?error=access_denied&state=RANDOM_STATE_STRING`}</CodeBlock>
              </Step>

              <Step n="4" title="Exchange the code for an access token">
                <p>
                  Server-side, the code is POSTed to the token endpoint along with the
                  integration&apos;s client credentials and the same{" "}
                  <InlineCode>redirect_uri</InlineCode> used in step 1:
                </p>
                <CodeBlock language="cURL">{`curl -X POST ${BASE_URL}/oauth/token \\
  -H "Content-Type: application/json" \\
  -d '{
    "grant_type": "authorization_code",
    "client_id": "CLIENT_ID",
    "client_secret": "CLIENT_SECRET",
    "redirect_uri": "REGISTERED_REDIRECT_URI",
    "code": "AUTHORIZATION_CODE"
  }'`}</CodeBlock>
                <p>The response contains both tokens and the access token&apos;s lifetime:</p>
                <CodeBlock language="JSON">{`{
  "token_type": "Bearer",
  "expires_in": 1296000,
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9...",
  "refresh_token": "def50200a1b2c3..."
}`}</CodeBlock>
              </Step>
            </div>

            <h3 className="font-degular mt-12 mb-3 text-xl font-bold">Using the token</h3>
            <p className="leading-relaxed text-[#3f3f46]">
              Send the access token in the <InlineCode>Authorization</InlineCode> header of
              every API call:
            </p>
            <CodeBlock language="HTTP">{`Authorization: Bearer YOUR_ACCESS_TOKEN`}</CodeBlock>

            <h3 className="font-degular mt-10 mb-3 text-xl font-bold">
              Token lifetimes and refreshing
            </h3>
            <div className="space-y-4 leading-relaxed text-[#3f3f46]">
              <p>
                Access tokens are valid for{" "}
                <span className="font-semibold text-[#171717]">15 days</span> and refresh
                tokens for <span className="font-semibold text-[#171717]">30 days</span>.
                Before an access token expires, exchange the refresh token for a new pair
                at the same <InlineCode>/oauth/token</InlineCode> endpoint:
              </p>
            </div>

            <CodeBlock language="cURL">{`curl -X POST ${BASE_URL}/oauth/token \\
  -H "Content-Type: application/json" \\
  -d '{
    "grant_type": "refresh_token",
    "client_id": "CLIENT_ID",
    "client_secret": "CLIENT_SECRET",
    "refresh_token": "REFRESH_TOKEN"
  }'`}</CodeBlock>

            <p className="leading-relaxed text-[#3f3f46]">
              If the refresh token expires too, the user has to go through the
              authorization flow again from step 1.
            </p>

            <Callout title="There are no OAuth scopes.">
              Access is not narrowed by scope. A token can do anything the connected
              workspace allows, so no <InlineCode>scope</InlineCode> parameter is sent.
              The client secret behaves like a password for the integration: it stays
              server-side and never appears in browser or mobile code.
            </Callout>
          </Section>

          {/* WORKSPACE HEADER */}
          <Section id="workspace" title="Workspace Header">
            <div className="space-y-4 leading-relaxed text-[#3f3f46]">
              <p>
                A user can belong to more than one workspace, so the access token alone
                does not say which workspace a request is about. Every GraphQL request
                must therefore carry an{" "}
                <InlineCode>X-Workspace-Id</InlineCode> header, spelled exactly like that,
                alongside the <InlineCode>Authorization</InlineCode> header. Requests
                without it will not resolve to a workspace.
              </p>
            </div>

            <CodeBlock language="HTTP">{`Authorization: Bearer YOUR_ACCESS_TOKEN
X-Workspace-Id: YOUR_WORKSPACE_ID`}</CodeBlock>

            <h3 className="font-degular mt-10 mb-3 text-xl font-bold">
              Finding your workspace ID
            </h3>
            <p className="leading-relaxed text-[#3f3f46]">
              Use the <InlineCode>listWorkspaces</InlineCode> query to list every
              workspace the authenticated user belongs to. It returns the{" "}
              <InlineCode>id</InlineCode>, <InlineCode>name</InlineCode>,{" "}
              <InlineCode>slug</InlineCode> and the user&apos;s{" "}
              <InlineCode>role</InlineCode> for each one:
            </p>

            <CodeBlock language="GraphQL">{`query ListWorkspaces {
  listWorkspaces {
    id
    name
    slug
    role
  }
}`}</CodeBlock>

            <Callout title="Two different fields, two different types.">
              The <InlineCode>workspace_id</InlineCode> argument used by mutations and
              carried in webhook payloads is type{" "}
              <InlineCode>Int</InlineCode>, not <InlineCode>ID!</InlineCode>. The{" "}
              <InlineCode>id</InlineCode> field on the{" "}
              <InlineCode>Workspace</InlineCode> type is type{" "}
              <InlineCode>ID</InlineCode>, which GraphQL serialises as a string. They
              refer to the same workspace but they are different fields on different
              types, so do not assume they come back in the same format. Coerce
              deliberately when you pass one into the other.
            </Callout>
          </Section>

          {/* GRAPHQL */}
          <Section id="graphql" title="GraphQL API">
            <div className="space-y-4 leading-relaxed text-[#3f3f46]">
              <p>
                The GraphQL endpoint lives at <InlineCode>/graphql/zapier</InlineCode>.
                Unlike a REST API, GraphQL exposes a single endpoint that accepts a
                query describing exactly the data you want. You ask for the fields you
                need and the response mirrors the shape of your query, nothing more and
                nothing less.
              </p>
              <p>
                Every request is a <InlineCode>POST</InlineCode> whose body contains a{" "}
                <InlineCode>query</InlineCode> string and an optional{" "}
                <InlineCode>variables</InlineCode> object. Queries read data; mutations
                write it. Both required headers,{" "}
                <InlineCode>Authorization</InlineCode> and{" "}
                <InlineCode>X-Workspace-Id</InlineCode>, must be present on every call.
              </p>
            </div>

            <p className="leading-relaxed text-[#3f3f46]">
              Here is a complete query that takes no arguments and returns the contacts
              created in the workspace:
            </p>

            <CodeBlock language="GraphQL">{`query ContactCreatedList {
  contactCreatedList {
    id
    email
    first_name
    last_name
  }
}`}</CodeBlock>

            <p className="leading-relaxed text-[#3f3f46]">Sent as an HTTP request:</p>

            <CodeBlock language="cURL">{`curl -X POST ${BASE_URL}/graphql/zapier \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "X-Workspace-Id: YOUR_WORKSPACE_ID" \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "query ContactCreatedList { contactCreatedList { id email first_name last_name } }"
  }'`}</CodeBlock>

            <p className="leading-relaxed text-[#3f3f46]">
              The response comes back under a <InlineCode>data</InlineCode> key, keyed by
              the fields you asked for:
            </p>

            <CodeBlock language="JSON">{`{
  "data": {
    "contactCreatedList": [
      { "id": 1, "email": "john@example.com", "first_name": "John", "last_name": "Doe" },
      { "id": 2, "email": "ada@example.com", "first_name": "Ada", "last_name": "Lovelace" }
    ]
  }
}`}</CodeBlock>

            <p className="leading-relaxed text-[#3f3f46]">
              Note that <InlineCode>id</InlineCode> comes back as an unquoted number:
              like <InlineCode>workspace_id</InlineCode>, it is a GraphQL{" "}
              <InlineCode>Int</InlineCode>, not an <InlineCode>ID</InlineCode>.
            </p>

            <p className="leading-relaxed text-[#3f3f46]">
              If something goes wrong, GraphQL still returns HTTP 200 and reports the
              problem in an <InlineCode>errors</InlineCode> array, so check for{" "}
              <InlineCode>errors</InlineCode> rather than relying on the status code
              alone.
            </p>
          </Section>

          {/* ZAPIER */}
          <Section id="zapier" title="Zapier Integration">
            <div className="space-y-4 leading-relaxed text-[#3f3f46]">
              <p>
                The Clientforce Zapier app connects your workspace to thousands of other
                tools without writing any code. It is built on the same API documented
                here, so anything you can do in a Zap you can also do directly.
              </p>
              <p>
                A Zap is made of a <span className="font-semibold text-[#171717]">trigger</span>,
                an event in Clientforce that starts the automation, and one or more{" "}
                <span className="font-semibold text-[#171717]">actions</span>, which are
                the things that happen next. Clientforce provides both: {TRIGGERS.length}{" "}
                triggers that fire on activity in your workspace, and {ACTIONS.length}{" "}
                actions that let other apps write into it.
              </p>
              <p>
                Connect your account once in Zapier, using the same authorization code
                flow described above and the workspace you pick on the consent screen. The
                triggers and actions below then become available to any Zap.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 p-5 transition-colors hover:border-[#35E834]">
                <p className="font-degular text-2xl font-bold">{TRIGGERS.length}</p>
                <p className="mt-1 font-semibold text-[#171717]">Triggers</p>
                <p className="mt-1 text-sm leading-relaxed text-[#676767]">
                  Events in Clientforce that can start a Zap: new contacts, replies,
                  meetings, calls and more.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-5 transition-colors hover:border-[#35E834]">
                <p className="font-degular text-2xl font-bold">{ACTIONS.length}</p>
                <p className="mt-1 font-semibold text-[#171717]">Actions</p>
                <p className="mt-1 text-sm leading-relaxed text-[#676767]">
                  Operations other apps can perform in Clientforce: tagging, list and
                  sequence membership, saving leads and recording purchases.
                </p>
              </div>
            </div>

            {/* TRIGGERS */}
            <SubSection id="triggers" title="Triggers">
              <p className="leading-relaxed text-[#3f3f46]">
                Each trigger corresponds to an event name and delivers a payload with the
                fields listed below. The same event names are used for webhook
                deliveries, so a Zap trigger and a webhook subscription receive the same
                data. Select a trigger to see its payload fields.
              </p>

              <div className="mt-8 space-y-3">
                {TRIGGERS.map((trigger) => (
                  <TriggerCard key={trigger.event} trigger={trigger} />
                ))}
              </div>
            </SubSection>

            {/* ACTIONS */}
            <SubSection id="actions" title="Actions">
              <p className="leading-relaxed text-[#3f3f46]">
                Actions let another app write into your Clientforce workspace. Contacts
                are matched by email address.
              </p>

              <div className="mt-8 divide-y divide-gray-200 rounded-xl border border-gray-200">
                {ACTIONS.map((action) => (
                  <div
                    key={action.name}
                    className="border-l-[3px] border-l-transparent p-5 transition-colors hover:border-l-[#35E834] hover:bg-[#fafafa] sm:p-6"
                  >
                    <h3 className="font-degular text-lg font-bold">{action.name}</h3>
                    <p className="mt-2 leading-relaxed text-[#676767]">
                      {action.description}
                    </p>
                  </div>
                ))}
              </div>
            </SubSection>
          </Section>

          {/* WEBHOOKS */}
          <Section id="webhooks" title="Webhooks">
            <div className="space-y-4 leading-relaxed text-[#3f3f46]">
              <p>
                Webhooks push events to your server the moment they happen, so you do not
                have to poll the API. Register an HTTPS endpoint, subscribe it to the
                events you care about, and Clientforce will POST a JSON payload to it
                each time one of those events fires.
              </p>
              <p>
                The events you can subscribe to are the same ones listed under{" "}
                <a
                  href="#triggers"
                  className="font-medium text-[#171717] underline underline-offset-4"
                >
                  Triggers
                </a>
                .
              </p>
            </div>

            <h3 className="font-degular mt-10 mb-3 text-xl font-bold">Payload structure</h3>
            <p className="leading-relaxed text-[#3f3f46]">
              Every delivery has the same envelope: a unique <InlineCode>id</InlineCode>{" "}
              for the delivery, the <InlineCode>event</InlineCode> name, and a{" "}
              <InlineCode>data</InlineCode> object holding that event&apos;s payload
              fields.
            </p>

            <CodeBlock language="JSON">{`{
  "id": "uuid-here",
  "event": "contact.created",
  "data": {
    "workspace_id": 123456,
    "lead_id": 789,
    "email": "john@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "phone": "+15551234567",
    "timestamp": "2026-01-01T00:00:00.000Z"
  }
}`}</CodeBlock>

            <h3 className="font-degular mt-10 mb-3 text-xl font-bold">
              Verifying the signature
            </h3>
            <div className="space-y-4 leading-relaxed text-[#3f3f46]">
              <p>
                Every delivery is signed so you can confirm it genuinely came from
                Clientforce and was not tampered with in transit. The signature arrives in
                a header named <InlineCode>Signature</InlineCode>, and is an{" "}
                <span className="font-semibold text-[#171717]">HMAC-SHA256</span> of the{" "}
                <span className="font-semibold text-[#171717]">raw JSON request body</span>,
                meaning the full envelope of <InlineCode>id</InlineCode>,{" "}
                <InlineCode>event</InlineCode> and <InlineCode>data</InlineCode> together,
                keyed with your endpoint secret.
              </p>
              <p>
                To verify a delivery, recompute the HMAC over the raw, unparsed body and
                compare it to the header value with a constant-time comparison. Reject the
                request if they do not match, and never trust a payload you have not
                verified.
              </p>
            </div>

            <CodeBlock language="PHP">{`$payload   = file_get_contents('php://input'); // raw body — do not re-encode
$signature = $_SERVER['HTTP_SIGNATURE'] ?? '';
$expected  = hash_hmac('sha256', $payload, $endpointSecret);

if (!hash_equals($expected, $signature)) {
    http_response_code(401);
    exit;
}

$event = json_decode($payload, true); // safe to parse now`}</CodeBlock>

            <Callout title="Sign the bytes you received.">
              Parsing the body and re-serialising it will change the JSON, key order and
              whitespace included, and the signature will no longer match. Always hash the
              raw request body exactly as it arrived.
            </Callout>

            <h3 className="font-degular mt-10 mb-3 text-xl font-bold">
              Responding to a webhook
            </h3>
            <p className="leading-relaxed text-[#3f3f46]">
              Return a <InlineCode>2xx</InlineCode> status as soon as you have accepted
              the payload, and do the real work asynchronously. A non-2xx response or a
              timeout is treated as a failed delivery. Deliveries can be retried, so
              handle events idempotently. Use the delivery{" "}
              <InlineCode>id</InlineCode> to recognise one you have already processed.
            </p>
          </Section>

          {/* RATE LIMITS & SUPPORT */}
          <Section id="limits" title="Rate Limits & Support">
            <h3 className="font-degular mb-3 text-xl font-bold">Rate limits</h3>
            <p className="leading-relaxed text-[#3f3f46]">
              Rate limits are not currently published. If you are planning a
              high-volume or latency-sensitive integration, contact support for current
              guidance before you build against an assumed limit. As a matter of good
              practice, back off and retry on failures rather than retrying immediately
              in a tight loop.
            </p>

            <h3 className="font-degular mt-10 mb-3 text-xl font-bold">Support</h3>
            <p className="leading-relaxed text-[#3f3f46]">
              Questions about the API, your workspace connection, or a specific Zap? Our
              help centre is the fastest way to reach us.
            </p>

            <a
              href="https://clientforceai.com/help"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3f3f46]"
            >
              Visit the Help Centre
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </Section>
        </div>
      </div>
    </div>
  );
}
