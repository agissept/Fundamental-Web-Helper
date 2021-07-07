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


const acceptBackendTemplate = `
<p>Hallo <strong>$name</strong>, terima kasih telah sabar menunggu. Kami membutuhkan waktu untuk bisa memberikan <em>feedback</em> sekomprehensif mungkin kepada setiap peserta kelas. Dalam kesempatan ini ada 4 (empat) hal yang ingin kami sampaikan.</p>
<p><strong>Pertama</strong>, kami ingin mengucapkan selamat! Karena kamu telah menyelesaikan tugas submission dan dinyatakan <strong>LULUS</strong> dari kelas Belajar Membuat Aplikasi Back-End untuk Pemula. Jangan lihat bintang yang kamu raih, tapi lihat kemajuan yang sudah kamu capai. Ingat semua <em>expert</em> dahulu pemula.</p>
<p><strong>K</strong><strong>edua</strong>, kamu boleh bangga karena telah menyelesaikan submission sesuai dengan kriteria yang telah kami tentukan. Mumpung masih hangat semangatnya langsung lanjut kelas selanjutnya yaitu <a href="https://www.dicoding.com/academies/266">Architecting on AWS (Membangun Arsitektur AWS di Cloud)</a> atau <a href="https://www.dicoding.com/academies/271">Belajar Fundamental Aplikasi Back-End</a>.</p>
<p><strong>K</strong><strong>etiga</strong>, beberapa lulusan tidak tahu mereka memiliki akses kelas selamanya. Sebagai informasi kelas Dicoding selalu <em>update</em> sehingga memiliki perbedaan minimal 30% dari sejak kelas dirilis. Silakan mampir kembali untuk melihat materi saat kamu membutuhkan <em>update</em> </p><p><strong>K</strong><strong>eempat</strong>, karena sudah praktik langsung maka kamu sudah menguasai ilmu kelas dasar ini antara 75-90%. Salah satu cara agar meningkatkan penguasaan ilmu agar bisa lebih maksimal (&gt;90%) adalah dengan memperbanyak latihan atau mengajarkan ilmu kepada orang lain.</p>
<p style="">Salah satu misi Dicoding adalah menyebarkan ilmu yang bermanfaat. Kami berusaha membangun kurikulum standar global dengan harapan agar developer Indonesia bisa menjadi jawara di negeri sendiri. Namun misi ini tidak akan tercapai tanpa kolaborasi dari kita semua.</p><p>Silakan berkunjung ke <a href="https://www.dicoding.com/academies/261/discussions">academy discussion</a> untuk mengasah penguasaan ilmu kamu dan membuat ilmu yang kamu dapatkan bisa semakin berkah dan bermanfaat dengan membantu kawan-kawan kita yang saat ini masih berjuang.</p><p>Terima kasih telah membantu misi kami. Kesuksesan developer Indonesia adalah energi bagi kami. Jika memiliki pertanyaan atau saran terkait kelas, silakan email ke <a href="mailto:%20academy@dicoding.com" rel="noreferrer noopener" target="_blank">academy@dicoding.com</a>.</p><hr><p style="text-align:right;"><em>Salam</em></p>
<p style="text-align:right;"><span style="color:rgb(226,80,65);">Dicoding Reviewer</span></p>
`

let checklist = false

const checklistAllCriteria = () => {
    if (checklist == false) {
        const button = document.querySelectorAll('.btn-group-toggle .btn-secondary')
        button.forEach(e => {
            e.click()
        })
        checklist == true
    }

}

function getIdSubmnission() {
    return window.location.pathname.split('/')[2]
}

function getSubmitter() {
    return document.querySelector('.form-control-static a').innerText
}

function getFolderPathSubmission() {
    const idSubmission = getIdSubmnission()
    const submitter = getSubmitter()
    return `C:\\Users\\Agis\\Desktop\\backend-pemula-auto-review\\result\\extract\\${idSubmission} ${submitter}`
}


const showAcceptButton = () => {
    const cardHeader = document.querySelectorAll('.card-header')[4]
    const buttonAccept1 = '<button id="accept-button" value="4">Bintang 4</button>'
    const buttonAccept2 = '<button id="accept-button" value="5">Bintang 5</button>'
    const buttonDownloadExtract = '<button id="download-extract-button"">Download and Extract</button>'

    cardHeader.insertAdjacentHTML('beforeend', buttonAccept1 + buttonAccept2 + buttonDownloadExtract + dropdown)

    document.querySelectorAll('#accept-button').forEach(button => {
        button.addEventListener('click', () => {
            checklistAllCriteria()

            const p = document.querySelectorAll('.form-control-static')[1]
            const name = p.querySelector('a').innerText
            const froala = document.querySelectorAll('.fr-element')[0]
            const template = acceptBackendTemplate.replace('$name', name)
            froala.innerHTML = template

            document.querySelector('.btn.btn-lg.btn-success').scrollIntoView({
                behavior: 'auto',
                block: 'center',
                inline: 'center'
            });

            document.querySelectorAll('.empty-stars .star')[4].click()
            document.querySelectorAll('.filled-stars .star')[4].click()

        })
    })

    document.querySelector('#download-extract-button').addEventListener('click', async () => {
        const url = document.querySelectorAll('a.btn.btn-secondary')[3].href
        const id = document.querySelectorAll('.form-control-static strong')[0].innerText
        const name = document.querySelectorAll('.form-control-static.mb-0 a')[0].innerText

        const response = await fetch('http://localhost:5555/downloadsubmission', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: url,
                fileName: `${id} ${name}.zip`
            })
        })

        console.log(response)

        alert(JSON.stringify(response))
    })

    document.querySelectorAll('#open-with a').forEach(e => {
        e.addEventListener('click', async (event) => {
            event.preventDefault()


            const response = await fetch('http://localhost:5555/opensubmission', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    appToOpen: e.name,
                    name: getSubmitter(),
                    id: getIdSubmnission()
                })
            })

            console.log(response)

            alert(JSON.stringify(response))
        })
    })

}

const colors = [
    'rgba(255, 0, 0, 0.9)',
    'rgba(0, 255, 0, 0.9)',
    'rgba(0, 0, 255, 0.9)',
    'rgba(255, 255, 0, 0.9)',
    'rgba(255, 0, 255, 0.9)'
]

function addTemplate(stars) {
    if (stars > 3) {
        window.addEventListener('load', (event) => {
            console.log('sssss')
            checklistAllCriteria()
            const p = document.querySelectorAll('.form-control-static')[1]
            const name = p.querySelector('a').innerText
            const froala = document.querySelectorAll('.fr-element')[0]
            const template = acceptBackendTemplate.replace('$name', name)
            froala.innerHTML = template

            document.querySelector('#accept-button').scrollIntoView({
                behavior: 'auto',
                block: 'center',
                inline: 'center'
            });

        });
    }
}

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


    const restructureElement = () => {

        const html = document.documentElement.innerHTML.split('\n')

        const arrayElements = html.filter(line =>
            line.includes('<header') || line.includes('</header>') ||
            line.includes('<main') || line.includes('</main>') ||
            line.includes('<article') || line.includes('</article>') ||
            line.includes('<aside') || line.includes('</aside>') ||
            line.includes('<footer') || line.includes('</footer>'))

        console.log(arrayElements.join('\n'))
    }

    window.addEventListener('load', () =>  {
        restructureElement()
    });
}

if (url.includes('https://www.dicoding.com/academysubmissions') && url.includes('review')) {
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

    showAcceptButton()

    const url1 = new URL(window.location.href);
    const stars = url1.searchParams.get("stars");

    if (stars !== undefined) {
        addTemplate(stars)
    }
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
            // froala[1].scrollIntoView()

            break
        case 'accept':
            allCheck()
            template = acceptionTemplate.replace('$name', name).replace('$message', templateMessage.message)
            froala[0].innerHTML = template
            // froala[0].scrollIntoView()

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
            // froala[1].scrollIntoView()
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

let pathFile = null;

document.addEventListener("contextmenu", function (event) {
    const path = event.target.getAttribute('data-path')
    pathFile = `${getFolderPathSubmission()}\\${path}`
}, true);


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request === "getClickedEl") {
        sendResponse({
            pathFile
        })
    }
});
