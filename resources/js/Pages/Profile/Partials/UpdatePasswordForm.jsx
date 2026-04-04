import { useForm } from "@inertiajs/react";
import { useRef } from "react";

export default function UpdatePasswordForm() {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset("password", "password_confirmation");
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset("current_password");
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Perbarui Kata Sandi
                </h2>
                <p className="mt-1 text-sm text-gray-800 ">
                    Pastikan akun Anda menggunakan kata sandi yang panjang dan
                    acak agar tetap aman.
                </p>
            </header>

            <form onSubmit={updatePassword} className="mt-6 space-y-6">
                <div>
                    <label
                        htmlFor="current_password"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Kata Sandi Saat Ini
                    </label>
                    <div className="mt-1">
                        <input
                            id="current_password"
                            ref={currentPasswordInput}
                            value={data.current_password}
                            onChange={(e) =>
                                setData("current_password", e.target.value)
                            }
                            type="password"
                            className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm  ${
                                errors.current_password
                                    ? "border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500 dark:text-red-400"
                                    : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400"
                            }`}
                            autoComplete="current-password"
                        />
                        {errors.current_password && (
                            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                                {errors.current_password}
                            </p>
                        )}
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-800"
                    >
                        Kata Sandi Baru
                    </label>
                    <div className="mt-1">
                        <input
                            id="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            type="password"
                            className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                                errors.password
                                    ? "border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500 dark:text-red-400"
                                    : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400"
                            }`}
                            autoComplete="new-password"
                        />
                        {errors.password && (
                            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                                {errors.password}
                            </p>
                        )}
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="password_confirmation"
                        className="block text-sm font-medium text-gray-800"
                    >
                        Konfirmasi Kata Sandi
                    </label>
                    <div className="mt-1">
                        <input
                            id="password_confirmation"
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            type="password"
                            className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                                errors.password_confirmation
                                    ? "border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500 dark:text-red-400"
                                    : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400"
                            }`}
                            autoComplete="new-password"
                        />
                        {errors.password_confirmation && (
                            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                                {errors.password_confirmation}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex items-center justify-end pt-6 border-t border-gray-200 dark:border-gray-700">
                    {recentlySuccessful && (
                        <p className="mr-4 text-sm text-gray-700 dark:text-gray-400">
                            Tersimpan.
                        </p>
                    )}
                    <button
                        type="submit"
                        disabled={processing}
                        className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 active:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25"
                    >
                        Simpan
                    </button>
                </div>
            </form>
        </section>
    );
}
