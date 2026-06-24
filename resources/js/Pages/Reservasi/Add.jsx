import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Add({ tamu = [], kamar = [] }) {
    const { data, setData, post, processing, errors } = useForm({
        tamu_id: "",
        kamar_id: "",
        check_in: "",
        check_out: "",
    });

    console.log(tamu)
    console.log(kamar)

    const submit = (e) => {
        e.preventDefault();
        post(route("reservasi.store"));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Tambah Reservasi
                </h2>
            }
        >
            <Head title="Tambah Reservasi" />

            <div className="py-6">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <form onSubmit={submit} className="space-y-6">

                                <div>
                                    <label className="block mb-2 text-sm font-medium">
                                        Tamu
                                    </label>

                                    <select
                                        value={data.tamu_id}
                                        onChange={(e) =>
                                            setData("tamu_id", e.target.value)
                                        }
                                        className="w-full rounded-md border-gray-300"
                                    >
                                        <option value="">
                                            -- Pilih Tamu --
                                        </option>

                                        {tamu.map((item) => (
                                            <option
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.user?.name}
                                            </option>
                                        ))}
                                    </select>

                                    {errors.tamu_id && (
                                        <div className="text-red-500 text-sm mt-1">
                                            {errors.tamu_id}
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium">
                                        Kamar
                                    </label>

                                    <select
                                        value={data.kamar_id}
                                        onChange={(e) =>
                                            setData("kamar_id", e.target.value)
                                        }
                                        className="w-full rounded-md border-gray-300"
                                    >
                                        <option value="">
                                            -- Pilih Kamar --
                                        </option>

                                        {kamar
                                        .filter((item) => item.status === "tersedia")
                                        .map((item) => (
                                            <option
                                                key={item.id}
                                                value={item.id}
                                            >
                                                Kamar {item.nomor_kamar} - {item.jenis_kamar?.nama}
                                            </option>
                                        ))}
                                    </select>

                                    {errors.kamar_id && (
                                        <div className="text-red-500 text-sm mt-1">
                                            {errors.kamar_id}
                                        </div>
                                    )}
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block mb-2 text-sm font-medium">
                                            Check In
                                        </label>

                                        <input
                                            type="date"
                                            value={data.check_in}
                                            onChange={(e) =>
                                                setData(
                                                    "check_in",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full rounded-md border-gray-300"
                                        />

                                        {errors.check_in && (
                                            <div className="text-red-500 text-sm mt-1">
                                                {errors.check_in}
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm font-medium">
                                            Check Out
                                        </label>

                                        <input
                                            type="date"
                                            value={data.check_out}
                                            onChange={(e) =>
                                                setData(
                                                    "check_out",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full rounded-md border-gray-300"
                                        />

                                        {errors.check_out && (
                                            <div className="text-red-500 text-sm mt-1">
                                                {errors.check_out}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex justify-end gap-2">
                                    <Link
                                        href={route("reservasi.index")}
                                        className="px-4 py-2 bg-gray-500 text-white rounded"
                                    >
                                        Kembali
                                    </Link>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="px-4 py-2 bg-indigo-600 text-white rounded"
                                    >
                                        Simpan
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
