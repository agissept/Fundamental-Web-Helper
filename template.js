const templateMessage = [
    // {
    //     key: `color-on`,
    //     message: 'COLOR_ON'
    // },
    {
        type: `custom-reject`,
        key: `plagiat`,
        message: `<p style="">Melalui proses pemeriksaan otomatis, kode pada project yang Anda submit menunjukkan <strong>tingkat kesamaan yang tinggi</strong> dengan kode pada project milik peserta lain.</p><p style="">Penggunaan referensi diperbolehkan selama tidak menggunakan submission peserta lain sebagai dasar atau base project. Sesuai <strong>SOP</strong> yang sudah ditetapkan, kami <strong>mengutamakan proses dibandingkan dengan hasil</strong>.</p><p style="">Kami tidak mentolerir segala bentuk plagiarisme, sesuai dengan <strong><em>terms of use</em></strong> pada poin berikut:</p><ul><li><strong>Melakukan pengumpulan aplikasi yang bukan merupakan karya developer tersebut.</strong></li></ul><p>Bisa dilihat pada halaman ini<a data-target-href="https://www.dicoding.com/termsofuse" href="https://www.dicoding.com/termsofuse" rel="noreferrer nofollow noopener" target="_blank"> </a><a data-target-href="https://www.dicoding.com/termsofuse" href="https://www.dicoding.com/termsofuse" rel="noreferrer nofollow noopener" target="_blank"><strong>https://www.dicoding.com/termsofuse</strong></a>.</p><p><br></p><p>Untuk informasi terkait hukuman suspend dapat dilihat pada halaman ini</p><p><a href="https://help.dicoding.com/academy-dicoding/informasi-tentang-suspend-akun-karena-plagiarisme/" rel="noreferrer nofollow noopener" target="_blank">https://help.dicoding.com/academy-dicoding/informasi-tentang-suspend-akun-karena-plagiarisme/</a></p><p><br></p><p>Submission akan kami reject, untuk revisi selanjutnya Anda harus mengirimkan submission hasil karya Anda sendiri (<strong>tidak</strong><strong> menggunakan submission peserta lain kemudian dimodifikasi</strong>).</p><p><br></p><p>Yang seharusnya Anda lakukan adalah :</p><ol start="1"><li>Periksa kembali checklist submissionnya</li><li>Pelajari kembali materinya</li><li>Buat proyek dari awal</li></ol><p style="">Jika ada yang tidak dimengerti manfaatkanlah forum diskusi akademi.</p><hr><p style="text-align:right;"><em>Salam</em></p><p style="text-align:right;"><span style="color:rgb(0,0,0);">Dicoding Reviewer</span></p>`
    },
    {
        type: `reject`,
        key: `zip`,
        message: `<li>File yang kamu kirimkan bukan merupakan project website(HTML/CSS). Seharusnya kamu mengirimkan file .<strong>Zip </strong>yang di dalamnya terdapat file berekstensi <strong>.html</strong> dan <strong>.css</strong>. Silakan diperbaiki lagi ya. </li>`
    },
    {
        type: `reject`,
        key: `tema`,
        message: `<li>Untuk dapat lulus dari kelas ini kamu harus mengirimkan website dengan tema berbeda dari modul. Silakan buat website kamu sendiri yang sesuai dengan ketentuan ya. </li>`
    },
    {
        type: `reject`,
        key: `tutorial`,
        message: `<li>Untuk menyelesaikan tugas submission dan mendapatkan sertifikat, kamu harus menyelesaikan project submission sesuai dengan kriteria yang ada dengan tidak menggunakan <strong>template dari internet</strong> atau <strong>project dari tutorial di luar dicoding</strong>. Silakan websitenya dibuat sendiri dari awal ya.</li>`
    }, {
        type: `reject`,
        key: `bootstrap`,
        message: `<li>Untuk menyelesaikan tugas submission dan mendapatkan sertifikat, kamu harus menyelesaikan project submission sesuai dengan kriteria yang ada dengan tidak menggunakan framework seperti Bootstrap, template, website builder seperti Blogger atau project dari tutorial di luar dicoding. Silakan websitenya dibuat sendiri dari awal ya.</li>`
    }, {
        type: 'accept',
        key: `acc1`,
        message: `<li>Website yang kamu buat sudah sangat baik, namun kamu masih terpaku pada penyusunan layout modul latihan, sebaiknya kamu berimprovisasi dengan cara membuat tampilan yang lebih menarik dari modul, responsive, dan menggunakan javascript untuk memanipulasi DOM. Tingkatkan websitenya untuk latihan yaa :). </li>`
    }, {type: 'accept',
        key: `acc2`,
        message: `<li>Aplikasi yang kamu buat sudah sangat baik. Namun akan lebih baik lagi jika kamu membuat tampilan yang lebih menarik, dapat menyesuaikan tampilan dengan baik di semua perangkat dan menggunakan javascript untuk memanipulasi DOM. Tingkatkan aplikasinya untuk latihan yaa :). </li>`
    }, {
        type: 'accept',
        key: `acc3`,
        message: `<li>Aplikasi yang kamu buat sudah sangat baik. Namun akan lebih baik lagi jika kamu membuat tampilan yang lebih menarik. Tingkatkan aplikasinya untuk latihan yaa :).</li>`
    }, {
        type: 'accept',
        key: `acc4`,
        message: `<li>Website yang kamu buat sudah sangat baik, namun kamu masih terpaku pada penyusunan layout modul latihan, sebaiknya kamu berimprovisasi dengan cara membuat tampilan yang lebih menarik dari modul. Tingkatkan websitenya untuk latihan yaa :).</li>`
    }

]