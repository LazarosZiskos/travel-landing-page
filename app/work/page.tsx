import Image from 'next/image';
import AiOutlineSearch from 'react-icons/ai'

const Work = () => {
  return (
    <section className="max-container padding-container flex justify-between items-center gap-5">
      <div>
        <Image src="/trail.png" alt='trail' height={1000} width={1000} />
      </div>
      <div>
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      <li className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-green-50 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg
            className="w-2.5 h-2.5 text-white dark:text-blue-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </span>
        <h3 className="flex items-center mb-1 regular-16 font-semibold text-gray-400 dark:text-white">
          Step 1       
        </h3>
        <time className="block mb-2 text-sm bold-16 leading-none text-gray-900 dark:text-gray-500">
          Discover Exciting Destinations
        </time>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Unleash your inner explorer by browsing through a wide range of breathtaking camping spots and majestic mountain destinations. From serene lakeside campgrounds to challenging summit trails, our app has it all.
        </p>
      </li>
      <li className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-green-50 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg
            className="w-2.5 h-2.5 text-white dark:text-blue-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </span>
        <h3 className="flex items-center mb-1 regular-16 font-semibold text-gray-400 dark:text-white">
          Step 2       
        </h3>
        <time className="block mb-2 text-sm bold-16 leading-none text-gray-900 dark:text-gray-500">
          Choose The Right Path For You
        </time>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        Create your dream camping or mountain expedition with just a few taps. Select your desired location, set your dates, and start planning your adventure.
        </p>
      </li>
      <li className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-green-50 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg
            className="w-2.5 h-2.5 text-white dark:text-blue-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </span>
        <h3 className="flex items-center mb-1 regular-16 font-semibold text-gray-400 dark:text-white">
          Step 3       
        </h3>
        <time className="block mb-2 text-sm bold-16 leading-none text-gray-900 dark:text-gray-500">
          Download The Offline Map
        </time>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        Explore detailed guides for each location, including trail maps, packing lists, and safety tips. Even though this is a mock project, our guides are designed to help you make the most of your adventure.
        </p>
      </li>
      <li className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-green-50 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg
            className="w-2.5 h-2.5 text-white dark:text-blue-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </span>
        <h3 className="flex items-center mb-1 regular-16 font-semibold text-gray-400 dark:text-white">
          Step 4       
        </h3>
        <time className="block mb-2 text-sm bold-16 leading-none text-gray-900 dark:text-gray-500">
          You Are Ready To Go!
        </time>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Just pack your bags and get ready to live the experience that you have always dreamt of! We take care of the rest!
        </p>
      </li>
      </ol>
    </div>
    </section>
  );
};

export default Work;
