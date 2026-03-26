import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Login - HotelKu" />

            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
                    Masuk ke Akun Anda
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                    Atau{" "}
                    <Link
                        href={route("welcome")}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        kembali ke beranda
                    </Link>
                </p>

                {status && (
                    <div className="mb-4 mt-4 rounded-md bg-green-50 p-4 text-sm font-medium text-green-800">
                        {status}
                    </div>
                )}

                <form onSubmit={submit} className="mt-8 space-y-6">
                    <div>
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Checkbox
                                name="remember"
                                id="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                            />
                            <label
                                htmlFor="remember"
                                className="ml-2 block text-sm text-gray-900"
                            >
                                Ingat saya
                            </label>
                        </div>

                        {canResetPassword && (
                            <div className="text-sm">
                                <Link
                                    href={route("password.request")}
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    Lupa password?
                                </Link>
                            </div>
                        )}
                    </div>

                    <div className="mt-6">
                        <PrimaryButton
                            className="w-full justify-center"
                            disabled={processing}
                        >
                            Masuk
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
