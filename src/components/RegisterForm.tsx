import {
  ArrowLeft,
  Eye,
  EyeOff,
  Key,
  Leaf,
  Loader,
  Lock,
  LogIn,
  Mail,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import googleImage from "@/asset/google.png";
import axios from "axios";
import { useRouter } from "next/navigation";

type propType = {
  previousStep: (s: number) => void;
};

const RegisterForm = ({ previousStep }: propType) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await axios.post("/api/auth/register", {
        name,
        email,
        password,
      });
      setLoading(false);

      console.log(result.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-white relative">
      <div
        className="absolute top-6 left-6 flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors cursor-pointer"
        onClick={() => previousStep(1)}
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">Back</span>
      </div>
      <motion.h1
        className="text-4xl font-extrabold text-blue-600 mb-2"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
      >
        Create Account
      </motion.h1>
      <p className="text-gray-600 mb-8 flex items-center gap-2">
        Join Eatoo today <Leaf className="w-5 h-5 text-blue-700 " />
      </p>
      <motion.form
        onSubmit={handleRegister}
        className="flex flex-col gap-5 w-full max-w-sm"
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
      >
        <div className="relative">
          <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Enter your name "
            className=" w-full border-gray-300 border rounded-xl py-3 pl-10 pr-4 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
          <input
            type="email"
            placeholder="Enter your email "
            className=" w-full border-gray-300 border rounded-xl py-3 pl-10 pr-4 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your Password "
            className=" w-full border-gray-300 border rounded-xl py-3 pl-10 pr-4 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          {showPassword ? (
            <EyeOff
              className="absolute right-3 top-3.5 w-5 h-5 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <Eye
              className="absolute right-3 top-3.5 w-5 h-5 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>

        {(() => {
          const formValidation = name !== "" && email !== "" && password !== "";
          return (
            <button
              disabled={!formValidation || loading}
              className={`w-full font-semibold py-3 rounded-xl transition-all duration-200 shadow-md inline-flex items-center justify-center gap-2 ${formValidation ? "bg-blue-500 text-white" : "bg-gray-400 cursor-not-allowed"}`}
            >
              {loading ? (
                <Loader className="w-5 h-5 animate-spin" />
              ) : (
                "Register"
              )}
            </button>
          );
        })()}

        <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
          <span className="flex-1 h-px bg-gray-300"></span>
          OR
          <span className="flex-1 h-px bg-gray-300"></span>
        </div>
        <button
          className="w-full flex items-center justify-center gap-3 border
             border-gray-300 hover:bg-gray-50 py-3 rounded-xl
             text-gray-700 font-medium transition-all duration-200"
        >
          <Image
            src={googleImage}
            width={40}
            height={40}
            alt="continue with google"
          />
          Continue with Google
        </button>
        <p
          className="text-gray-600 mt-6 text-sm flex items-center justify-center gap-2  cursor-pointer"
          onClick={() => router.push("/login")}
        >
          Already have an account ? <LogIn className="w-4 h-4" />{" "}
          <span className="text-blue-800 font-bold">Sign In</span>
        </p>
      </motion.form>
    </div>
  );
};

export default RegisterForm;
