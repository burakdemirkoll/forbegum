import { useEffect, useState } from "react";

// Konusmaya basladigimiz an: 22 Kasim 2026, 22:32 Turkiye saati.
const BASLANGIC = new Date("2026-11-22T22:32:00+03:00").getTime();

export default function App() {
  const [simdi, setSimdi] = useState(Date.now);

  useEffect(() => {
    const timer = window.setInterval(() => setSimdi(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const gecen = Math.max(0, simdi - BASLANGIC);
  const gun = Math.floor(gecen / 86_400_000);
  const saat = Math.floor((gecen / 3_600_000) % 24);
  const dakika = Math.floor((gecen / 60_000) % 60);
  const saniye = Math.floor((gecen / 1_000) % 60);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#baslangic" aria-label="Bir ihtimal, başa dön">
          bir ihtimal<span>.</span>
        </a>
        <a className="header-link" href="#not">Küçük bir not <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="hero" id="baslangic" aria-labelledby="hero-title">
          <div className="hero-image" role="img" aria-label="Mavi saatlerde sakin bir deniz ve deniz feneri" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="hero-kicker"><span className="kicker-line" /> SANA KÜÇÜK BİR NOT</p>
            <h1 id="hero-title">İyi ki<br /><em>denk geldik.</em></h1>
            <p className="hero-description">Bazı insanlarla konuşmak, günün en güzel kısmı oluyor. Sen de benim için öylesin.</p>
            <a className="primary-button" href="#not">Devam et <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-bottom" aria-hidden="true"><span>Biraz aşağı kaydır</span><span className="down-arrow">↓</span></div>
        </section>

        <section className="note-section" id="not" aria-labelledby="note-title">
          <div className="section-number">01 / KÜÇÜK BİR NOT</div>
          <div className="note-content">
            <p className="section-kicker">KONUŞMAYA BAŞLADIĞIMIZ AN</p>
            <p className="date-line">22 Kasım 2026 <span>·</span> 22:32</p>
            <p className="date-caption">Şu saatten itibaren beraberiz.</p>
            <div className="elapsed" aria-label={gecen === 0 ? "Başlangıç tarihi henüz gelmedi" : `Konuşmaya başlayalı ${gun} gün, ${saat} saat, ${dakika} dakika, ${saniye} saniye geçti`}>
              <p className="elapsed-title">KONUŞMAYA BAŞLAYALI</p>
              {gecen === 0 ? (
                <p className="elapsed-pending">Bu an henüz gelmedi.</p>
              ) : (
                <div className="elapsed-values" aria-hidden="true">
                  {[[gun, "GÜN"], [saat, "SAAT"], [dakika, "DAKİKA"], [saniye, "SANİYE"]].map(([deger, etiket]) => (
                    <div className="elapsed-unit" key={etiket}>
                      <span className="elapsed-number">{String(deger).padStart(2, "0")}</span>
                      <span className="elapsed-label">{etiket}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="note-divider" />
            <h2 id="note-title">Şimdilik<br /><em>birkaç cümle.</em></h2>
            <div className="note-text">
              <p>Seninle konuşurken zamanın nasıl geçtiğini pek anlamıyorum. En sıradan konu bile seninle daha eğlenceli oluyor.</p>
              <p>Henüz her şeyin başındayız, biliyorum. O yüzden büyük laflar etmeyeceğim. Sadece seni tanımaktan gerçekten keyif aldığımı söylemek istedim.</p>
              <p className="last-line">Bakalım, bu hikâye bizi nereye götürecek.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>bir ihtimal<span className="footer-dot">.</span></span>
        <span>Senin için, içtenlikle.</span>
      </footer>
    </div>
  );
}
