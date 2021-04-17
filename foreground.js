const rejectionTemplate = `
<p>Hai <strong>$name!</strong> terima kasih telah sabar menunggu. Kami membutuhkan waktu untuk bisa memberikan feedback sekomprehensif mungkin. Setiap submission diperiksa satu per satu oleh tim reviewer yang memiliki sertifikasi global atau telah bekerja di perusahaan ternama.</p>
<p>Setelah dilakukan proses review project website yang kamu kirimkan, project tersebut belum memenuhi kriteria untuk lulus kelas Belajar Dasar Pemrograman Web. Sebagai informasi kriteria kelulusan kelas ini menggunakan standar global yang telah disepakati dengan mitra industri.</p>
<p>Oleh karena itu kami harus menolak submission project kamu. Namun jangan berkecil hati. Kami menolak submission kamu karena kami ingin developer Indonesia memahami dasar web secara komprehensif. Agar kelak bisa menyelesaikan berbagai masalah yang tidak selalu ada di tutorial.</p>
<p>Berikut adalah catatan <strong>yang harus terpenuhi</strong> untuk menyelesaikan tugas submission sebagai berikut:</p>
<ul>$message</ul>
<p>Jika kamu sudah lebih dari 1x ditolak maka jangan pernah menyerah, karena ada lulusan Dicoding yang akhirnya lulus satu kelas setelah 48x ditolak. Meskipun demikian tim reviewer tetap profesional dan dengan senang hati memberikan feedback terbaik yang kami bisa.</p>
<p>Silakan ikuti saran di atas. Jika ada pertanyaan atau kendala dalam menerapkan saran di atas, silakan bertanya di <a href="https://www.dicoding.com/academies/123/discussions" rel="noreferrer noopener" target="_blank">forum diskusi kelas</a>. Dengan senang hati kami akan membantu menjawab di sana. Kemajuan terbaik developer Indonesia adalah passion kami.</p>
<hr>
<p style="text-align:right;"><em>Salam</em></p>
<p style="text-align:right;"><span style="color:rgb(0,0,0);">Dicoding Reviewer</span></p>`

const acceptionTemplate = `
<p>Hallo <strong>$name!</strong>, terima kasih telah sabar menunggu. Kami membutuhkan waktu untuk bisa memberikan feedback sekomprehensif mungkin kepada setiap peserta kelas. Dalam kesempatan ini ada 4 (empat) hal yang ingin kami sampaikan.</p>
<p><strong>Pertama</strong>, kami ingin mengucapkan selamat! Karena kamu telah menyelesaikan tugas submission dan dinyatakan <strong>LULUS</strong> dari kelas Belajar Dasar Pemrograman Web. Jangan lihat bintang yang kamu raih, tapi lihat kemajuan yang sudah kamu capai. Ingat semua expert dahulu pemula. Berikut catatan terkait submission kamu:</p>
<ul>$message</ul>
<p><strong>Kedua</strong>, meskipun kamu telah menguasai tiga pilar dasar dalam membangun website, yakni HTML, CSS, dan JavaScript, mohon jangan berpuas diri. Mumpung masih hangat semangatnya langsung lanjut kelas selanjutnya yaitu <a href="https://www.dicoding.com/academies/163" rel="noreferrer noopener" target="_blank">Belajar Fundamental Front-End Web Development</a>.</p>
<p>Supaya lebih semangat belajarnya, silakan baca laporan dari Glassdoor yang dimuat oleh <a href="https://www.cnbc.com/2020/01/14/glassdoor-best-tech-jobs-for-2020.html" rel="noreferrer noopener" target="_blank">CNBC</a> yang menyatakan bahwa Front End Engineer adalah pekerjaaan teknis (tech job) terbaik di tahun 2020. Dicoding telah merancang alur belajar <a href="https://www.dicoding.com/learningpaths/22" rel="noreferrer noopener" target="_blank">Front-End Web Developer</a> dengan standar global.</p>
<p><strong>Ketiga</strong>, beberapa lulusan tidak tahu mereka memiliki akses kelas selamanya. Sebagai informasi kelas Dicoding selalu <em>update </em>sehingga memiliki perbedaan minimal 30% dari sejak kelas dirilis. Silakan mampir kembali untuk melihat materi saat kamu membutuhkan update. </p>
<p><strong>Keempat</strong>, karena sudah praktik langsung maka kamu sudah menguasai ilmu kelas dasar ini antara 75-90%. Salah satu cara agar meningkatkan penguasaan ilmu agar bisa lebih maksimal (&gt;90%) adalah dengan memperbanyak latihan atau mengajarkan ilmu kepada orang lain.  Maka dari itu untuk mengasah kemampuan dan membuat ilmu kamu lebih berkah serta bermanfaat, silakan berkunjung ke <a href="https://www.dicoding.com/academies/123/discussions" rel="noreferrer noopener" target="_blank">forum diskusi kelas</a> untuk membantu kawan-kawan kita yang saat ini masih berjuang.</p>
<p>Salah satu misi Dicoding adalah menyebarkan ilmu yang bermanfaat. Kami berusaha membangun kurikulum standar global dengan harapan agar developer Indonesia bisa menjadi jawara di negeri sendiri. Namun misi ini tidak akan tercapai tanpa kolaborasi dari kita semua. </p>
<p>Terima kasih telah membantu misi kami. Kesuksesan developer Indonesia adalah energi bagi kami. Jika memiliki pertanyaan atau saran terkait kelas, silakan email ke <a href="mailto:%20academy@dicoding.com" rel="noreferrer noopener" target="_blank">academy@dicoding.com</a>. </p>
<hr>
<p style="text-align:right;"><em>Salam</em></p>
<p style="text-align:right;"><span style="color:rgb(0,0,0);">Dicoding Reviewer</span></p>`


const colors = [
    'rgba(255, 0, 0, 0.9)',
    'rgba(0, 255, 0, 0.9)',
    'rgba(0, 0, 255, 0.9)',
    'rgba(255, 255, 0, 0.9)',
    'rgba(255, 0, 255, 0.9)'
]

const url = window.location.href
if (url.includes('file://')) {

    const arrayStrElment = ["header", "footer", "main", "article", "aside"]
    arrayStrElment.forEach(strElement => {
        checkElement(strElement)
    })

    function checkElement(strElement) {
        const elements = document.getElementsByTagName(strElement)
        if (elements.length > 0) {
            console.log(`%c${strElement}: true`, 'color: color: #155724; background-color: #d4edda;');
        } else {
            console.log(`%c${strElement}: false`, 'color: #721c24; background-color: #f8d7da;');
        }
    }
}

if (url.includes('https://www.dicoding.com/academysubmissions') && url.endsWith('review')) {
    document.querySelector('.js-source-code').addEventListener('click', () => {
        const commentForm = document.querySelector('.js-line-comment .js-comment-form')
        if (commentForm !== null) {
            commentForm.addEventListener("keydown", function (e) {
                if ((e.which == 13 || e.which == 10)) {
                    if (e.ctrlKey) {
                        e.stopImmediatePropagation();
                        e.preventDefault();
                        document.querySelector('.js-comment-form .btn-primary').click()
                    }
                }
            }, true);
        }
    })

}


if (url.includes('https://www.dicoding.com/dashboard')) {
    const table = document.querySelector('.student-satisfaction-stats')
    // create an observer instance
    const observer = new MutationObserver(function (mutations) {
        if (table.text !== 'Loading data') {
            markLowRating()
        }
    });
    // configuration of the observer:
    const config = {
        attributes: true,
        childList: true,
        characterData: true
    };
    // pass in the target node, as well as the observer options
    observer.observe(table, config);

    function markLowRating() {
        let data = [...table.rows].map(t => [...t.children].map(u => u.innerText))
        data.forEach((element, index) => {
            if (parseFloat(element[3]) < 4.75) {
                table.children[index].style.background = 'red'
            }
        })
    }
}


window.addEventListener("load", () => {
    document.querySelector("body").style.fontWeight = 500
    const buttons = document.querySelectorAll(".btn")
    buttons.forEach((button) => {
        button.style.fontWeight = 600
    })
})

const allCheck = () => {
    const checklistContainer = document.querySelectorAll('.card.card-default.mb-4')[4]
    const checklist = checklistContainer.querySelectorAll('label.btn-secondary')
    checklist.forEach(element => {
        element.click()
    })
}


chrome.runtime.onMessage.addListener(function (templateMessage) {
    console.log("zzzz");
    const p = document.querySelectorAll('.form-control-static')[1]
    const name = p.querySelector('a').innerText
    const froala = document.querySelectorAll('.fr-element')


    let template
    switch (templateMessage.type) {
        case "all-check":
            allCheck()
            break
        case 'reject':
            // const checklistContainer = document.querySelectorAll('.card.card-default.mb-4')[4]
            // const checklist = checklistContainer.querySelectorAll('label.btn-secondary')
            // checklist.forEach(element => {
            //     // element.click()
            // })

            template = rejectionTemplate.replace('$name', name).replace('$message', templateMessage.message)
            froala[1].innerHTML = template
            froala[1].scrollIntoView()

            break
        case 'accept':
            allCheck()
            template = acceptionTemplate.replace('$name', name).replace('$message', templateMessage.message)
            froala[0].innerHTML = template
            froala[0].scrollIntoView()

            break
        case 'copy':

            const dummy = document.createElement("textarea");
            // to avoid breaking orgain page when copying more words
            // cant copy when adding below this code
            // dummy.style.display = 'none'
            document.body.appendChild(dummy);
            //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
            dummy.value = templateMessage.message;
            dummy.select();

            function listener(e) {
                e.clipboardData.setData("text/html", templateMessage.message);
                e.clipboardData.setData("text/plain", templateMessage.message);
                e.preventDefault();
            }
            document.addEventListener("copy", listener);
            document.execCommand("copy");
            document.removeEventListener("copy", listener);
            document.body.removeChild(dummy);
            break
        default:
            template = templateMessage.message
            froala[1].innerHTML = template
            froala[1].scrollIntoView()
            break;
    }



    // if (message.type === 'accept') {

    //     console.log(froala)

    // }

    // if (message.key === "color-on") {
    //     let indexColor = 0;
    //     arrayStrElment.forEach(strElement => {
    //         const elements = document.getElementsByTagName(strElement)

    //         for (let i = 0; i < elements.length; i++) {
    //             elements[i].style.background = colors[indexColor]
    //         }
    //         indexColor++;

    //     })
    // } else if (message.key === "zip") {
    //     const p = document.querySelectorAll('.form-control-static')[1]
    //     const name = p.querySelector('a').innerText
    //     const template = message.message.replace('$name', name)
    //     const froala = document.querySelectorAll('.fr-element')
    //     froala[1].innerHTML = template

    // } else {
    //     const p = document.querySelectorAll('.form-control-static')[1]
    //     const name = p.querySelector('a').innerText
    //     const template = message.message.replace('$name', name)
    //     const froala = document.querySelectorAll('.fr-element')
    //     froala[1].innerHTML = template
    // }

})
