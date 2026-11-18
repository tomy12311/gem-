"use client";

import { useState, type FormEvent } from "react";


export default function SignUp() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password.length < 6) {
      setMessage("Нууц үг 6-аас дээш тэмдэгт байх ёстой!");
      return;
    }

    setMessage(
      mode === "login"
        ? "Backend холбогдоогүй байна."
        : "Demo бүртгэл амжилттай!"
    );
  };

  return (
    <div className="min-h-screen bg-[#101010] flex items-center justify-center p-5 text-white">

      <div className="w-full max-w-[420px] bg-[#191919] rounded-2xl overflow-hidden shadow-2xl">

        {/* Logo */}
        <div className="text-center py-6 text-4xl font-bold text-red-600">
          Gem cinema
        </div>

        {/* Banner */}
        <div
          className="h-36 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(#0005,#0009), url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=900')"
          }}
        />

        <div className="p-7">

          <h2 className="text-2xl font-bold text-center">
            {mode === "login" ? "Тавтай морил!" : "Бүртгэл үүсгэх"}
          </h2>

          <p className="text-center text-gray-400 text-sm mt-2 mb-6">
            {mode === "login"
              ? "Кино ертөнцөд нэвтэрнэ үү"
              : "Gem хэрэглэгч болоорой"}
          </p>

          {/* Tabs */}
          <div className="flex bg-[#292929] p-1 rounded-lg mb-6">

            <button
              onClick={() => {
                setMode("login");
                setMessage("");
              }}
              className={`flex-1 py-3 rounded-md transition ${
                mode === "login"
                  ? "bg-red-600"
                  : "hover:bg-[#383838]"
              }`}
            >
              Нэвтрэх
            </button>

            <button
              onClick={() => {
                setMode("register");
                setMessage("");
              }}
              className={`flex-1 py-3 rounded-md transition ${
                mode === "register"
                  ? "bg-red-600"
                  : "hover:bg-[#383838]"
              }`}
            >
              Бүртгүүлэх
            </button>

          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {mode === "register" && (
              <div>
                <label className="block text-sm mb-2">Нэр</label>
                <input
                  type="text"
                  placeholder="Таны нэр"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-3.5 rounded-lg bg-[#292929] border border-[#444] outline-none focus:border-red-600"
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm mb-2">
                Имэйл хаяг
              </label>

              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3.5 rounded-lg bg-[#292929] border border-[#444] outline-none focus:border-red-600"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm mb-2">
                Нууц үг
              </label>

              <div className="flex gap-2">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Нууц үгээ оруулна уу"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full min-w-0 p-3.5 rounded-lg bg-[#292929] border border-[#444] outline-none focus:border-red-600"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="px-3 bg-[#333] rounded-lg hover:bg-[#444]"
                >
                  {showPassword ? "Нуух" : "Харах"}
                </button>
              </div>
            </div>

            {/* Remember */}
            {mode === "login" && (
              <div className="flex justify-between items-center text-xs text-gray-400">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-red-600" />
                  Намайг сана
                </label>

                <button
                  type="button"
                  className="text-red-500 hover:text-red-400"
                  onClick={() => setMessage("Нууц үг сэргээхэд backend шаардлагатай.")}
                >
                  Нууц үг мартсан?
                </button>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 bg-red-600 hover:bg-red-700 rounded-lg font-bold transition active:scale-[0.98]"
            >
              {mode === "login" ? "НЭВТРЭХ" : "БҮРТГҮҮЛЭХ"}
            </button>

            {message && (
              <p className="text-center text-sm text-red-400">
                {message}
              </p>
            )}

          </form>

          <div className="text-center text-gray-500 text-xs mt-7">
            Gem cinema © 2026 | Movie Streaming UI
          </div>

        </div>
      </div>
    </div>
  );
}
