import { Link, useForm, usePage } from "@inertiajs/react";

export default function UpdateProfileInformation({ mustVerifyEmail, status }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();
        patch(route("profile.update"));
    };

    return (
        <section>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Informasi Profil
                </h2>
                <p className="mt-1 text-sm text-gray-700">
                    Perbarui informasi profil dan alamat email akun Anda.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-800"
                    >
                        Nama
                    </label>
                    <div className="mt-1">
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                            autoFocus
                            className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                                errors.name
                                    ? "border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500 dark:text-red-400"
                                    : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400"
                            }`}
                        />
                        {errors.name && (
                            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                                {errors.name}
                            </p>
                        )}
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-800"
                    >
                        Email
                    </label>
                    <div className="mt-1">
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            required
                            className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                                errors.email
                                    ? "border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500 dark:text-red-400"
                                    : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400"
                            }`}
                        />
                        {errors.email && (
                            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                                {errors.email}
                            </p>
                        )}
                    </div>
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm text-gray-700">
                            Alamat email Anda belum terverifikasi.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="rounded-md text-sm text-gray-700 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-white"
                            >
                                Klik di sini untuk mengirim ulang email
                                verifikasi.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 text-sm font-medium text-green-600 dark:text-green-400">
                                Link verifikasi baru telah dikirim ke alamat
                                email Anda.
                            </div>
                        )}
                    </div>
                )}

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
