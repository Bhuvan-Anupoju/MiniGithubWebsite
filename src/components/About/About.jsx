export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://icon-library.com/images/github-icon-vector/github-icon-vector-22.jpg"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Discover the people who bring ideas to life through pull requests
              and collaboration
            </h2>
            <p className="mt-6 text-gray-600">
              GitHub is the world's leading platform for software development
              and version control, built around the powerful Git system. It
              enables developers to collaborate on projects, track changes in
              code, and contribute to open source communities from anywhere in
              the world. With millions of repositories and a vibrant global
              network of contributors, GitHub is more than just a place to store
              code. It is where ideas come to life, teams work together
              seamlessly, and innovation thrives
            </p>
            <p className="mt-4 text-gray-600">
              GitHub is more than a place for code. It's a living, breathing
              network of innovators, dreamers, and problem-solvers. Each profile
              is a journey, each repository a chapter, and every commit a step
              forward. With our app, you can dive deep into these journeys,
              discover new perspectives, and connect with like-minded creators
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
