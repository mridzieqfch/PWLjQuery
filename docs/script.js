$(document).ready(function () {
  // Hide
  $("#hideBtn").click(function () {
    $("#box").hide(1000);
  });

  // Show
  $("#showBtn").click(function () {
    $("#box").show(1000);
  });

  // Fade Toggle
  $("#fadeBtn").click(function () {
    $("#box").fadeToggle(1000);
  });

  // Slide Toggle
  $("#slideBtn").click(function () {
    $("#box").slideToggle(1000);
  });

  // Animasi
  $("#animateBtn").click(function () {
    $("#box")
      .animate(
        {
          left: "200px",
          opacity: "0.5",
          height: "200px",
          width: "200px",
        },
        1000,
      )
      .animate(
        {
          left: "0px",
          opacity: "1",
          height: "150px",
          width: "150px",
        },
        1000,
      );
  });

  // Bounce
  $("#bounceBtn").click(function () {
    $("#box")
      .animate({ top: "-=30px" }, 200)
      .animate({ top: "+=30px" }, 200)
      .animate({ top: "-=20px" }, 150)
      .animate({ top: "+=20px" }, 150);
  });

  // Reset
  $("#resetBtn").click(function () {
    $("#box").stop(true, true).show().css({
      left: "0px",
      top: "0px",
      opacity: "1",
      width: "150px",
      height: "150px",
      transform: "translateY(0)",
    });
  });

  // Page entrance
  $(".container").hide().fadeIn(800);
  $("h1")
    .css({ opacity: 0, position: "relative", top: "20px" })
    .animate({ opacity: 1, top: 0 }, 900);

  // --- SIMULASI INDIKATOR SISTEM (PROGRESS BAR) ---

  $("#fillBtn").click(function () {
    // Menganimasi lebar CSS menjadi 100%
    $("#progressBar").stop(true, true).animate({ width: "100%" }, 2000);

    // Menganimasi objek kustom untuk efek angka berjalan
    let startVal = parseInt($("#progressText").text()) || 0;
    $({ counter: startVal })
      .stop(true, true)
      .animate(
        { counter: 100 },
        {
          duration: 2000,
          step: function (now) {
            $("#progressText").text(Math.ceil(now) + "%");
          },
        },
      );
  });

  // 2. Logika untuk mengosongkan kapasitas (100% ke 0%)
  $("#drainBtn").click(function () {
    // Menganimasi lebar CSS kembali ke 0%
    $("#progressBar").stop(true, true).animate({ width: "0%" }, 2000);

    let startVal = parseInt($("#progressText").text()) || 0;
    $({ counter: startVal })
      .stop(true, true)
      .animate(
        { counter: 0 },
        {
          duration: 2000,
          step: function (now) {
            $("#progressText").text(Math.ceil(now) + "%");
          },
        },
      );
  });

  // --- ANIMASI UNTUK SECTION ANGGOTA KELOMPOK ---

  // --- LOGIKA PANEL FLOATING TIM PENGEMBANG ---
  
  // Menggunakan jQuery fadeToggle untuk memunculkan/menyembunyikan panel dengan animasi transisi
  $("#floatingToggleBtn, #closeTeamBtn").click(function () {
    $("#teamPopup").fadeToggle(400);
  });

  // 1. Animasi hover kustom menggunakan animate()
  $(".team-card")
    .mouseenter(function () {
      // Mengangkat kartu ke atas sedikit
      $(this).stop(true, true).animate({ top: "-8px" }, 200);
    })
    .mouseleave(function () {
      // Mengembalikan kartu ke posisi semula
      $(this).stop(true, true).animate({ top: "0px" }, 200);
    });

  // 2. Animasi slideToggle untuk memunculkan detail tugas
  $(".detail-btn").click(function () {
    // Mencari elemen dengan class .detail-info di dalam kartu yang sama lalu di-slide
    let detailInfo = $(this).siblings(".detail-info");
    detailInfo.slideToggle(300);

    // Mengubah teks tombol secara dinamis
    if ($(this).text().trim() === "Lihat Detail") {
      $(this).text("Tutup Detail");
    } else {
      $(this).text("Lihat Detail");
    }
  });

  // --- SIMULASI ALIRAN DATA JARINGAN (CYBERPUNK NETWORK FLOW) ---

  // Helper untuk mendapatkan timestamp saat ini
  function getTimestamp() {
    let now = new Date();
    let hh = String(now.getHours()).padStart(2, '0');
    let mm = String(now.getMinutes()).padStart(2, '0');
    let ss = String(now.getSeconds()).padStart(2, '0');
    return `[${hh}:${mm}:${ss}]`;
  }

  // Helper untuk mencetak log ke panel konsol
  function addLog(message, type = 'info') {
    let colorClass = 'text-slate-300';
    if (type === 'client') colorClass = 'text-indigo-400 font-semibold';
    else if (type === 'gateway') colorClass = 'text-amber-400 font-semibold';
    else if (type === 'db') colorClass = 'text-purple-400 font-semibold';
    else if (type === 'success') colorClass = 'text-emerald-400 font-bold';
    else if (type === 'error') colorClass = 'text-rose-400 font-bold';

    let logHtml = `<div class="${colorClass}">${getTimestamp()} ${message}</div>`;
    $("#networkLogs").append(logHtml);
    
    // Auto-scroll ke bawah
    $("#networkLogs").scrollTop($("#networkLogs")[0].scrollHeight);
  }

  // Reset status visual node
  function resetNodeStyles() {
    // Client node
    $("#clientNode")
      .removeClass("border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]")
      .addClass("border-slate-700/50");
    $("#clientNode .node-status")
      .text("READY")
      .removeClass("text-indigo-400 bg-indigo-500/10 border-indigo-500/20 text-emerald-400 bg-emerald-500/10 border-emerald-500/20")
      .addClass("text-teal-400 bg-teal-500/10 border-teal-500/20");

    // Gateway node
    $("#gatewayNode")
      .removeClass("border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]")
      .addClass("border-slate-700/50");
    $("#gatewayNode .node-status")
      .text("IDLE")
      .removeClass("text-amber-400 bg-amber-500/10 border-amber-500/20")
      .addClass("text-slate-400 bg-slate-500/10 border-slate-700/20");

    // DB node
    $("#dbNode")
      .removeClass("border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]")
      .addClass("border-slate-700/50");
    $("#dbNode .node-status")
      .text("IDLE")
      .removeClass("text-purple-400 bg-purple-500/10 border-purple-500/20")
      .addClass("text-slate-400 bg-slate-500/10 border-slate-700/20");
  }

  // Aksi tombol Kirim Data
  $("#sendDataBtn").click(function () {
    let btn = $(this);
    
    // Cegah klik ganda selama animasi berlangsung
    btn.prop("disabled", true).addClass("opacity-50 cursor-not-allowed");
    $("#resetNetworkBtn").prop("disabled", true).addClass("opacity-50");
    
    resetNodeStyles();
    $("#networkLogs").empty();
    
    addLog("// Memulai simulasi pengiriman paket data...", "info");
    
    // Set status awal Client Node
    $("#clientNode")
      .removeClass("border-slate-700/50")
      .addClass("border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]");
    $("#clientNode .node-status")
      .text("SENDING")
      .removeClass("text-teal-400 bg-teal-500/10 border-teal-500/20")
      .addClass("text-indigo-400 bg-indigo-500/10 border-indigo-500/20");
      
    addLog("Client: Mengirimkan HTTP POST Request ke API Gateway...", "client");

    // Persiapkan & tampilkan paket data di posisi Client (16.66%)
    $("#dataPacket")
      .stop(true, true)
      .css({ left: "16.66%", display: "block", opacity: 1 })
      
      // Langkah 1: Kirim ke API Gateway (50%)
      .animate({ left: "50%" }, 1200, function () {
        // Callback saat tiba di API Gateway
        $("#clientNode")
          .removeClass("border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]")
          .addClass("border-slate-700/50");
        $("#clientNode .node-status")
          .text("WAITING")
          .removeClass("text-indigo-400 bg-indigo-500/10 border-indigo-500/20")
          .addClass("text-slate-400 bg-slate-500/10 border-slate-700/20");

        $("#gatewayNode")
          .removeClass("border-slate-700/50")
          .addClass("border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]")
          .animate({ marginTop: "-10px" }, 150)
          .animate({ marginTop: "0px" }, 150); // Efek bounce kustom

        $("#gatewayNode .node-status")
          .text("PROCESSING")
          .removeClass("text-slate-400 bg-slate-500/10 border-slate-700/20")
          .addClass("text-amber-400 bg-amber-500/10 border-amber-500/20");

        addLog("API Gateway: Request diterima. Memvalidasi auth & rate-limit...", "gateway");
      })
      
      // Delay di Gateway
      .delay(800)
      
      // Langkah 2: Kirim ke Database Server (83.33%)
      .animate({ left: "83.33%" }, 1200, function () {
        // Callback saat tiba di Database
        $("#gatewayNode")
          .removeClass("border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]")
          .addClass("border-slate-700/50");
        $("#gatewayNode .node-status")
          .text("FORWARDED")
          .removeClass("text-amber-400 bg-amber-500/10 border-amber-500/20")
          .addClass("text-slate-400 bg-slate-500/10 border-slate-700/20");

        $("#dbNode")
          .removeClass("border-slate-700/50")
          .addClass("border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]")
          .animate({ marginTop: "-10px" }, 150)
          .animate({ marginTop: "0px" }, 150); // Efek bounce kustom

        $("#dbNode .node-status")
          .text("QUERYING")
          .removeClass("text-slate-400 bg-slate-500/10 border-slate-700/20")
          .addClass("text-purple-400 bg-purple-500/10 border-purple-500/20");

        addLog("Database: Eksekusi SQL Query SELECT * FROM users...", "db");
      })
      
      // Delay di DB
      .delay(700)
      
      // Langkah 3: Kembalikan ke API Gateway (50%)
      .animate({ left: "50%" }, 1200, function () {
        // Callback saat kembali ke Gateway
        $("#dbNode")
          .removeClass("border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]")
          .addClass("border-slate-700/50");
        $("#dbNode .node-status")
          .text("IDLE")
          .removeClass("text-purple-400 bg-purple-500/10 border-purple-500/20")
          .addClass("text-slate-400 bg-slate-500/10 border-slate-700/20");

        $("#gatewayNode")
          .removeClass("border-slate-700/50")
          .addClass("border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]")
          .animate({ marginTop: "-10px" }, 150)
          .animate({ marginTop: "0px" }, 150);

        $("#gatewayNode .node-status")
          .text("RESPONDING")
          .removeClass("text-slate-400 bg-slate-500/10 border-slate-700/20")
          .addClass("text-amber-400 bg-amber-500/10 border-amber-500/20");

        addLog("API Gateway: Kueri berhasil. Menyusun payload JSON response...", "gateway");
      })
      
      // Delay di Gateway sebelum dikembalikan ke Client
      .delay(400)
      
      // Langkah 4: Kembalikan ke Client (16.66%)
      .animate({ left: "16.66%" }, 1200, function () {
        // Callback saat tiba kembali di Client
        $("#gatewayNode")
          .removeClass("border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]")
          .addClass("border-slate-700/50");
        $("#gatewayNode .node-status")
          .text("IDLE")
          .removeClass("text-amber-400 bg-amber-500/10 border-amber-500/20")
          .addClass("text-slate-400 bg-slate-500/10 border-slate-700/20");

        $("#clientNode")
          .removeClass("border-slate-700/50")
          .addClass("border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]")
          .animate({ marginTop: "-10px" }, 150)
          .animate({ marginTop: "0px" }, 150);

        $("#clientNode .node-status")
          .text("SUCCESS")
          .removeClass("text-slate-400 bg-slate-500/10 border-slate-700/20")
          .addClass("text-emerald-400 bg-emerald-500/10 border-emerald-500/20");

        addLog("Client: Response JSON diterima! Status 200 OK.", "success");
        addLog("// Simulasi selesai dengan sukses.", "info");

        // Hilangkan paket data secara halus setelah selesai
        $("#dataPacket").fadeOut(400);

        // Aktifkan kembali tombol kontrol
        btn.prop("disabled", false).removeClass("opacity-50 cursor-not-allowed");
        $("#resetNetworkBtn").prop("disabled", false).removeClass("opacity-50");
      });
  });

  // Aksi tombol Reset Jaringan
  $("#resetNetworkBtn").click(function () {
    $("#dataPacket").stop(true, true).hide().css({ left: "16.66%" });
    resetNodeStyles();
    $("#networkLogs").html('<div class="text-slate-500">// Sistem di-reset. Klik \'Kirim Data\' untuk mulai simulasi.</div>');
    addLog("Sistem jaringan berhasil di-reset ke status default.", "info");
  });

  // Aksi tombol Clear Log
  $("#clearLogBtn").click(function () {
    $("#networkLogs").empty().html('<div class="text-slate-500">// Log dibersihkan.</div>');
  });
});
