import React from "react";
import { useForm, Link } from "@inertiajs/react";
import Navbar from "../_components/Navbar";

const Add = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        no_ktp: "",
        no_hp: "",
        alamat: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("user.store"));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-4xl mx-auto py-8 px-4">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Tambah Tamu
                        </h1>
                        <p className="text-sm text-gray-500">
                            Tambahkan data tamu baru.
                        </p>
                    </div>

                    <Link
                        href={route("user.tamu")}
                        className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                        Kembali
                    </Link>
                </div>

                <div className="bg-white rounded-xl shadow border">
                    <div className="p-6">
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        className="w-full rounded-lg border-gray-300"
                                        placeholder="Masukkan nama lengkap"
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className="w-full rounded-lg border-gray-300"
                                        placeholder="Masukkan email"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    className="w-full rounded-lg border-gray-300"
                                    placeholder="Masukkan password"
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        No. KTP
                                    </label>
                                    <input
                                        type="text"
                                        value={data.no_ktp}
                                        onChange={(e) =>
                                            setData("no_ktp", e.target.value)
                                        }
                                        className="w-full rounded-lg border-gray-300"
                                        placeholder="Masukkan nomor KTP"
                                    />
                                    {errors.no_ktp && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.no_ktp}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        No. HP
                                    </label>
                                    <input
                                        type="text"
                                        value={data.no_hp}
                                        onChange={(e) =>
                                            setData("no_hp", e.target.value)
                                        }
                                        className="w-full rounded-lg border-gray-300"
                                        placeholder="Masukkan nomor HP"
                                    />
                                    {errors.no_hp && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.no_hp}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Alamat
                                </label>
                                <textarea
                                    rows="4"
                                    value={data.alamat}
                                    onChange={(e) =>
                                        setData("alamat", e.target.value)
                                    }
                                    className="w-full rounded-lg border-gray-300"
                                    placeholder="Masukkan alamat lengkap"
                                />
                                {errors.alamat && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.alamat}
                                    </p>
                                )}
                            </div>

                            <div className="border-t pt-4 flex justify-end gap-3">
                                <Link
                                    href={route("user.tamu")}
                                    className="px-5 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                                >
                                    Batal
                                </Link>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                                >
                                    {processing
                                        ? "Menyimpan..."
                                        : "Simpan Tamu"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add;
