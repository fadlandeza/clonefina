import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasi pengiriman email reset password
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
        {submitted ? (
          <div className="text-green-600 text-center mb-4">
            Link reset password telah dikirim ke email Anda.
          </div>
        ) : (
          <>
            <div className="mb-6">
              <label className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Masukkan email Anda"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition-colors duration-200"
            >
              Kirim Link Reset
            </button>
          </>
        )}
        <button
          type="button"
          className="w-full mt-4 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 rounded transition-colors duration-200"
          onClick={() => navigate("/")}
        >
          Kembali ke Login
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
