import React from "react";
import { useForm, Link, Head } from "@inertiajs/react";

// Impor komponen styling yang biasanya ada di proyek Breeze
// Jika tidak ada, Anda bisa membuatnya dengan kelas Tailwind.
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

const Add = () => {
    const { data, setData, post, processing, errors } = useForm({
        no_ktp: "",
        nama: "",
        alamat: "",
        no_hp: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("tamu.store"));
    };

    return (
        <>
            <Head title="Tambah Tamu - HotelKu" />

            <div className="max-w-2xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    {/* Header: Judul dan Tombol Kembali */}
                    <div className="p-6 bg-white border-b border-gray-200">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-semibold text-gray-800">
                                Tambah Tamu Baru
                            </h2>
                            <Link href={route("tamu.index")}>
                                <button
                                    type="button"
                                    className="inline-flex items-center px-4 py-2 bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-gray-800 uppercase tracking-widest hover:bg-gray-300 focus:outline-none focus:border-gray-400 focus:ring ring-gray-200 disabled:opacity-25 transition ease-in-out duration-150"
                                >
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                        ></path>
                                    </svg>
                                    Kembali ke Daftar
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Form Body */}
                    <div className="p-6 bg-gray-50">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Field No KTP */}
                            <div>
                                <InputLabel
                                    htmlFor="no_ktp"
                                    value="Nomor KTP"
                                />
                                <TextInput
                                    id="no_ktp"
                                    type="text"
                                    name="no_ktp"
                                    value={data.no_ktp}
                                    className="mt-1 block w-full"
                                    autoComplete="off"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("no_ktp", e.target.value)
                                    }
                                    placeholder="Masukkan nomor KTP tamu"
                                />
                                <InputError
                                    message={errors.no_ktp}
                                    className="mt-2"
                                />
                            </div>

                            {/* Field Nama */}
                            <div>
                                <InputLabel
                                    htmlFor="nama"
                                    value="Nama Lengkap"
                                />
                                <TextInput
                                    id="nama"
                                    type="text"
                                    name="nama"
                                    value={data.nama}
                                    className="mt-1 block w-full"
                                    autoComplete="name"
                                    onChange={(e) =>
                                        setData("nama", e.target.value)
                                    }
                                    placeholder="Masukkan nama lengkap tamu"
                                />
                                <InputError
                                    message={errors.nama}
                                    className="mt-2"
                                />
                            </div>

                            {/* Field Alamat (menggunakan textarea) */}
                            <div>
                                <InputLabel
                                    htmlFor="alamat"
                                    value="Alamat Lengkap"
                                />
                                <textarea
                                    id="alamat"
                                    name="alamat"
                                    value={data.alamat}
                                    className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                    rows="3"
                                    onChange={(e) =>
                                        setData("alamat", e.target.value)
                                    }
                                    placeholder="Masukkan alamat lengkap tamu"
                                ></textarea>
                                <InputError
                                    message={errors.alamat}
                                    className="mt-2"
                                />
                            </div>

                            {/* Field No HP (menggunakan type="tel") */}
                            <div>
                                <InputLabel
                                    htmlFor="no_hp"
                                    value="Nomor Telepon / HP"
                                />
                                <TextInput
                                    id="no_hp"
                                    type="tel" // Lebih semantik untuk nomor telepon
                                    name="no_hp"
                                    value={data.no_hp}
                                    className="mt-1 block w-full"
                                    autoComplete="tel"
                                    onChange={(e) =>
                                        setData("no_hp", e.target.value)
                                    }
                                    placeholder="Masukkan nomor telepon aktif"
                                />
                                <InputError
                                    message={errors.no_hp}
                                    className="mt-2"
                                />
                            </div>

                            {/* Tombol Submit */}
                            <div className="flex items-center justify-end mt-8">
                                <PrimaryButton disabled={processing}>
                                    {processing
                                        ? "Menyimpan..."
                                        : "Simpan Data Tamu"}
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Add;
