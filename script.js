document.addEventListener('DOMContentLoaded', () => {
    const currentMonthEl = document.getElementById('currentMonth');
    const currentYearEl = document.getElementById('currentYear');
    const daysGridEl = document.getElementById('daysGrid');
    const prevMonthButton = document.querySelector('.prev-month');
    const nextMonthButton = document.querySelector('.next-month');
    const todayButton = document.getElementById('todayButton');
    const clearButton = document.getElementById('clearButton');

    // Menggunakan waktu lokal Indonesia (WIB/WITA/WIT akan mengikuti sistem pengguna)
    // Untuk nama bulan, kita akan gunakan array dalam bahasa Indonesia
    const namaBulan = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    let currentDate = new Date(); // Tanggal yang sedang ditampilkan di kalender
    let selectedDate = null;    // Tanggal yang dipilih oleh pengguna

    function renderCalendar() {
        daysGridEl.innerHTML = ''; // Kosongkan grid sebelum mengisi tanggal baru

        const year = currentDate.getFullYear();
        const month = currentDate.getMonth(); // 0 (Jan) - 11 (Dec)

        currentMonthEl.textContent = namaBulan[month];
        currentYearEl.textContent = year;

        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);
        const lastDayOfPrevMonth = new Date(year, month, 0);

        const firstDayOfWeek = firstDayOfMonth.getDay(); // 0 (Minggu) - 6 (Sabtu)
        const totalDaysInMonth = lastDayOfMonth.getDate();
        const daysInPrevMonth = lastDayOfPrevMonth.getDate();

        const today = new Date(); // Tanggal aktual hari ini

        // 1. Render padding hari dari bulan sebelumnya
        for (let i = firstDayOfWeek; i > 0; i--) {
            const day = daysInPrevMonth - i + 1;
            const dayButton = createDayButton(day, month - 1, year, ['prev-month-day']);
            daysGridEl.appendChild(dayButton);
        }

        // 2. Render hari-hari di bulan ini
        for (let i = 1; i <= totalDaysInMonth; i++) {
            const dayClasses = ['current-month-day'];
            const dateToCheck = new Date(year, month, i);

            if (isSameDate(dateToCheck, today)) {
                dayClasses.push('today');
            }
            if (selectedDate && isSameDate(dateToCheck, selectedDate)) {
                dayClasses.push('selected');
            }

            const dayButton = createDayButton(i, month, year, dayClasses);
            daysGridEl.appendChild(dayButton);
        }

        // 3. Render padding hari dari bulan berikutnya untuk melengkapi grid (total 42 sel untuk 6 baris)
        const totalCellsRendered = firstDayOfWeek + totalDaysInMonth;
        const remainingCells = (totalCellsRendered > 35) ? (42 - totalCellsRendered) : (35 - totalCellsRendered); // Target 5 atau 6 baris

        for (let i = 1; i <= remainingCells; i++) {
            const dayButton = createDayButton(i, month + 1, year, ['next-month-day']);
            daysGridEl.appendChild(dayButton);
        }
    }

    function createDayButton(day, month, year, classes = []) {
        const button = document.createElement('button');
        button.type = 'button';
        button.classList.add('day', ...classes);
        button.textContent = day;
        button.dataset.date = new Date(year, month, day).toISOString().split('T')[0]; // Simpan tanggal dalam format YYYY-MM-DD

        button.addEventListener('click', (e) => {
            if (classes.includes('prev-month-day') || classes.includes('next-month-day')) {
                // Jika mengklik hari padding, pindah ke bulan tersebut dan pilih tanggal
                currentDate = new Date(year, month, day); // Koreksi untuk bulan dan tahun jika month > 11 atau < 0
                selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            } else {
                selectedDate = new Date(year, month, day);
            }
            renderCalendar(); // Re-render untuk update tampilan 'selected'
            // Di sini Anda bisa menambahkan logika untuk melakukan sesuatu dengan selectedDate
            // misalnya, mengisi input field tersembunyi atau menampilkan di tempat lain.
            console.log("Tanggal dipilih:", selectedDate.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }));
        });
        return button;
    }

    function isSameDate(date1, date2) {
        return date1.getFullYear() === date2.getFullYear() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getDate() === date2.getDate();
    }

    prevMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    todayButton.addEventListener('click', () => {
        currentDate = new Date(); // Kembali ke bulan dan tahun saat ini
        selectedDate = new Date(); // Pilih tanggal hari ini juga
        renderCalendar();
    });

    clearButton.addEventListener('click', () => {
        selectedDate = null;
        renderCalendar(); // Re-render untuk menghapus kelas 'selected'
    });

    // Render kalender saat halaman pertama kali dimuat
    renderCalendar();
});