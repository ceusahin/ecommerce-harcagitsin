import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      role_id: "3",
    },
  });
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const selectedRole = watch("role_id");

  useEffect(() => {
    axiosInstance
      .get("/roles")
      .then((res) => {
        setValue("role_id", "3");
        // console.log(res.data);
        setRoles(res.data);
      })
      .catch((err) => console.error("Roller alınamadı:", err));
  }, [setValue]);

  const onSubmit = async (data) => {
    setLoading(true);

    delete data.passwordConfirm;
    data.role_id = Number(data.role_id);

    if (data.role_id !== 2) {
      delete data.store;
    }

    try {
      await axiosInstance.post("/signup", data);
      console.log(data);
      alert("You need to click link in email to activate your account!");
      navigate(-1);
    } catch (error) {
      console.log(data);
      alert(error?.response?.data?.message || "Kayıt sırasında hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto text-left p-10 bg-white shadow-md rounded-3xl my-20">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Sign up
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            İsim
          </label>
          <input
            className="mt-1 w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("name", { required: true, minLength: 3 })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">İsim en az 3 karakter olmalı</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            className="mt-1 w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">Geçerli bir email giriniz</p>
          )}
        </div>

        {/* Password / 1 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Şifre
          </label>
          <input
            type="password"
            className="mt-1 w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("password", {
              required: true,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">
              Şifre en az 8 karakter, büyük/küçük harf, sayı ve özel karakter
              içermeli
            </p>
          )}
        </div>

        {/* Password / 2 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Şifre Tekrar
          </label>
          <input
            type="password"
            className="mt-1 w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("passwordConfirm", {
              validate: (value) =>
                value === watch("password") || "Şifreler uyuşmuyor",
            })}
          />
          {errors.passwordConfirm && (
            <p className="text-red-500 text-sm">
              {errors.passwordConfirm.message}
            </p>
          )}
        </div>

        {/* Role */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Rol</label>
          <select
            className="mt-1 w-full border rounded-md p-2"
            {...register("role_id", { required: true })}
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id.toString()}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        {/* Store Info */}
        {+selectedRole === 2 && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mağaza Adı
              </label>
              <input
                className="mt-1 w-full border rounded-md p-2"
                {...register("store.name", { required: true, minLength: 3 })}
              />
              {errors.store?.name && (
                <p className="text-red-500 text-sm">En az 3 karakter olmalı</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mağaza Telefonu
              </label>
              <input
                className="mt-1 w-full border rounded-md p-2"
                {...register("store.phone", {
                  required: true,
                  pattern: /^(\+90|0)?5\d{9}$/,
                })}
              />
              {errors.store?.phone && (
                <p className="text-red-500 text-sm">
                  Geçerli bir Türkiye cep numarası giriniz
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Vergi Numarası
              </label>
              <input
                className="mt-1 w-full border rounded-md p-2"
                {...register("store.tax_no", {
                  required: true,
                  pattern: /^T\d{4}V\d{6}$/,
                })}
              />
              {errors.store?.tax_no && (
                <p className="text-red-500 text-sm">Format: TXXXXVXXXXXX</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                IBAN
              </label>
              <input
                className="mt-1 w-full border rounded-md p-2"
                {...register("store.bank_account", {
                  required: true,
                  pattern: /^TR\d{2}\d{5}\d{16}$/,
                })}
              />
              {errors.store?.bank_account && (
                <p className="text-red-500 text-sm">Geçerli bir IBAN giriniz</p>
              )}
            </div>
          </>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200 disabled:opacity-60"
        >
          {loading ? "Kaydediliyor..." : "Kayıt Ol"}
        </button>
      </form>
    </div>
  );
}

export default Signup;
