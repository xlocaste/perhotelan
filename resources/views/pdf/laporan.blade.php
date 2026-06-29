<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Laporan Transaksi</title>

    <style>
        body{
            font-family: Arial, sans-serif;
            font-size:12px;
        }

        h2{
            text-align:center;
            margin-bottom:20px;
        }

        table{
            width:100%;
            border-collapse:collapse;
        }

        th,td{
            border:1px solid #000;
            padding:8px;
        }

        th{
            background:#f2f2f2;
        }

        .text-right{
            text-align:right;
        }

        .footer{
            margin-top:20px;
            text-align:right;
            font-weight:bold;
        }
    </style>
</head>
<body>

    <h2>LAPORAN TRANSAKSI HOTEL</h2>

    <table>
        <thead>
            <tr>
                <th>No</th>
                <th>Tanggal Bayar</th>
                <th>Tamu</th>
                <th>Kamar</th>
                <th>Metode</th>
                <th>Status</th>
                <th>Total</th>
            </tr>
        </thead>

        <tbody>
            @foreach($transaksi as $item)
            <tr>
                <td>{{ $loop->iteration }}</td>

                <td>
                    {{ \Carbon\Carbon::parse($item->tanggal_bayar)->format('d/m/Y') }}
                </td>

                <td>
                    {{ $item->reservasi->tamu->user->name ?? '-' }}
                </td>

                <td>
                    {{ $item->reservasi->kamar->nomor_kamar ?? '-' }}
                </td>

                <td>
                    {{ $item->metode_pembayaran }}
                </td>

                <td>
                    {{ ucfirst($item->status_pembayaran) }}
                </td>

                <td class="text-right">
                    Rp {{ number_format($item->total_harga,0,',','.') }}
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <div class="footer">
        Total Pendapatan :
        Rp {{ number_format($totalPendapatan,0,',','.') }}
    </div>

</body>
</html>

