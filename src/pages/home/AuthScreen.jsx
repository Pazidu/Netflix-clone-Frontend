import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const AuthScreen = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="hero-bg relative">
      {/* navbar */}
      <header className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <img src="/netflix-logo.png" alt="logo" className="w-52" />
        <Link to={"/login"} className="text-white bg-red-600 py-1 px-2 rounded">
          Sign in
        </Link>
      </header>

      {/* hero section */}
      <div className="flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="text-lg mb-4">Watch anywhere. Cancel anytime.</p>
        <p className="mb-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <form
          className="flex flex-col md:flex-row gap-4 w-1/2"
          //onSubmit={handleFormSubmit}
        >
          <input
            type="email"
            placeholder="Email address"
            className="p-2 rounded flex-1 bg-black/80 border border-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-red-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center">
            Get Started
            <ChevronRight className="size-8 md:size-10" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthScreen;
