// export default function BlogHero() {
//   return (
//     <section className="w-full bg-white pt-32 pb-16 px-6">
//       <div className="mx-auto max-w-4xl text-center">

//         {/* Label */}
//         <span className="mb-4 inline-block rounded-full bg-green-50 px-4 py-1.5 text-lg font-semibold text-green-600">
//           Clientforce Blog
//         </span>

//         {/* Heading */}
//         <h1 className="mb-5 text-5xl font-extrabold leading-tight text-gray-900 font-degular">
//           Insights, Strategy &{" "}
//           <span className="text-green-500">AI Sales Intelligence</span>
//         </h1>

//         {/* Subheading */}
//         <p className="mx-auto max-w-xl text-lg leading-relaxed text-gray-500">
//           Practical guides, product updates and sales frameworks from the
//           Clientforce team — built for teams that want to grow faster.
//         </p>

//       </div>
//     </section>
//   );
// }

export default function BlogHero() {
  return (
    <section className="w-full bg-white pt-24 pb-12 px-6 md:pt-32 md:pb-16">
      <div className="mx-auto max-w-4xl text-center">

        <span className="mb-4 inline-block rounded-full bg-green-50 px-4 py-1.5 text-base lg:text-lg font-semibold text-green-600">
          Clientforce Blog
        </span>

        <h1 className="mb-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 font-degular">
          Insights, Strategy &{" "}
          <span className="text-green-500">AI Sales Intelligence</span>
        </h1>

        <p className="mx-auto max-w-xl text-base lg:text-lg leading-relaxed text-gray-500">
          Practical guides, product updates and sales frameworks from the
          Clientforce team — built for teams that want to grow faster.
        </p>

      </div>
    </section>
  );
}