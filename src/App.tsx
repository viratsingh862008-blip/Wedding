import { motion } from "motion/react";
import { ParallaxLayer } from "@/components/wedding/ParallaxLayer";

const IMG = "https://framerusercontent.com/images/";

const art = {
  hero: IMG + "ctlwo5LpuBk9eskYOT9Z2MD8wso.webp?width=868&height=4326",
  eventCard: IMG + "TUkRvFIUDwblbb4eewkBlJzZwJw.png?width=1515&height=2342",
  logo: IMG + "pyLtbhSLIRf4NHAy72amY2aW58.webp?width=330&height=130",
  flowerSeal: IMG + "ciPCtoLf1PEnCNBnsx6boOBPU.webp?width=280&height=280",
  sideRight: IMG + "gt4WrIeOxcZz1kQLQ9ovWBkpc.webp?width=140&height=202",
  sideLeft: IMG + "dU6QWYOyKfqMfHH3mCT84Z3dAJE.webp?width=142&height=205",
  sideLeftAlt: IMG + "lsI4FJ0BeiT9e8FhL5WYmPRlnyY.webp?width=143&height=206",
  mandap: IMG + "vo85LJWiG7KY5sTcDsBhG1aEc.webp?width=869&height=948",
  hanging: IMG + "plRMuObVZgXFVWzrOuY2xNVRHHs.webp?width=116&height=607",
  ramMark: IMG + "kJ6ukGxpOPVxnwLybHzfIL3VtkM.webp?width=168&height=52",
  diya: IMG + "5FVM3OmFePuLZFoKyYpESSXgaE.webp?width=94&height=130",
  floralWordmark: IMG + "dRCMDT9ufGWEZehulDCNdJpwaLs.webp?width=390&height=79",
  story: IMG + "Vmh2DwpF7PAgb69W6NahdCwGidA.webp?width=876&height=3156",
  bellA: IMG + "BETBi0AtFY20asJ3PfAMAFe8g.png?width=41&height=293",
  bellB: IMG + "XegR81dMLWk0YMirVBF6rsfAs3Y.png?width=41&height=293",
  collageTop: IMG + "Zrnq96rxcNCLdk4Yaz94Dup5Q.webp?width=886&height=464",
  collageOne: IMG + "qTlCAkdnbuZVEx4RAWSlgsGHX0.webp?width=1200&height=968",
  collageTwo: IMG + "jv9Y5c65dupWuUvOrLUvDm6o.webp?width=1200&height=1189",
  collageCenter: IMG + "CAJYZSTyHrLw4D8Gxv3UGjFaMg.webp?width=400&height=339",
  collageBg: IMG + "ELVgHUKqtqAl9gf1nwbYhSeTg.webp?width=1200&height=968",
  timeline: IMG + "hUKMKAtrpqFCDTXl35Y5yuIjRw.webp?width=866&height=3244",
};

const events = [
  { title: "Shaadi", day: "Friday", date: "29th Aug 2026", place: "Pune, Maharashtra", time: "6 Pm Onwards", x: 26, y: 38.3 },
  { title: "Shaadi", day: "Friday", date: "29th Aug 2026", place: "Pune, Maharashtra", time: "6 Pm Onwards", x: 74, y: 38.3 },
  { title: "Shaadi", day: "Friday", date: "29th Aug 2026", place: "Pune, Maharashtra", time: "6 Pm Onwards", x: 26, y: 48.9 },
  { title: "Shaadi", day: "Friday", date: "29th Aug 2026", place: "Pune, Maharashtra", time: "6 Pm Onwards", x: 74, y: 48.9 },
  { title: "Shaadi", day: "Friday", date: "29th Aug 2026", place: "Pune, Maharashtra", time: "6 Pm Onwards", x: 26, y: 59.5 },
  { title: "Shaadi", day: "Friday", date: "29th Aug 2026", place: "Pune, Maharashtra", time: "6 Pm Onwards", x: 74, y: 59.5 },
];

function EventCard({ event }: { event: (typeof events)[number] }) {
  return (
    <motion.article
      className="referenceEvent"
      style={{ left: event.x + "%", top: event.y + "%" }}
      whileHover={{ y: -6 }}
    >
      <img src={art.eventCard} alt="" />
      <div className="referenceEventCopy">
        <h2>{event.title}</h2>
        <p>{event.day}</p>
        <p>{event.date}</p>
        <p>{event.place}</p>
        <p>{event.time}</p>
        <small>More details below</small>
      </div>
    </motion.article>
  );
}

function Bell({ side = "left" }: { side?: "left" | "right" }) {
  return (
    <div className={"bell " + side}>
      <img src={side === "left" ? art.bellA : art.bellB} alt="Hanging bell" />
    </div>
  );
}

export function App() {
  return (
    <main className="referencePage referenceCanvas">
      <section className="referenceHero">
        <ParallaxLayer className="heroArtwork" distance={70}>
          <img src={art.hero} alt="" />
        </ParallaxLayer>

        <div className="heroDecor">
          <ParallaxLayer className="heroLogo" distance={35}>
            <img src={art.logo} alt="" />
          </ParallaxLayer>
          <ParallaxLayer className="heroSeal" distance={55}>
            <img src={art.flowerSeal} alt="" />
          </ParallaxLayer>
          <Bell side="left" />
          <Bell side="right" />
          {events.map((event, index) => <EventCard key={index} event={event} />)}
        </div>
      </section>

      <section className="referenceMandap">
        <ParallaxLayer className="mandapArtwork" distance={120}>
          <img src={art.mandap} alt="" />
        </ParallaxLayer>
        <ParallaxLayer className="mandapStory" distance={70}>
          <img src={art.story} alt="" />
        </ParallaxLayer>
        <img className="mandapRamMark" src={art.ramMark} alt="" />
        <img className="mandapDiya" src={art.diya} alt="" />
        <img className="mandapWordmark" src={art.floralWordmark} alt="" />
      </section>

      <section className="referenceGallery">
        <ParallaxLayer className="galleryBg" distance={45}>
          <img src={art.collageBg} alt="" />
        </ParallaxLayer>
        <ParallaxLayer className="galleryTop" distance={95}>
          <img src={art.collageTop} alt="" />
        </ParallaxLayer>
        <ParallaxLayer className="galleryOne" distance={130}>
          <img src={art.collageOne} alt="" />
        </ParallaxLayer>
        <ParallaxLayer className="galleryTwo" distance={170}>
          <img src={art.collageTwo} alt="" />
        </ParallaxLayer>
        <ParallaxLayer className="galleryCenter" distance={210}>
          <img src={art.collageCenter} alt="" />
        </ParallaxLayer>
      </section>

      <section className="referenceTimeline">
        <ParallaxLayer className="timelineArtwork" distance={100}>
          <img src={art.timeline} alt="" />
        </ParallaxLayer>
        <div className="timelineOverlay">
          <div className="timelineHeading">
            <span>THE CELEBRATION</span>
            <h2>Moments that become memories.</h2>
          </div>
          <div className="timelinePhotoRing">
            {[
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop",
            ].map((src, i) => (
              <ParallaxLayer key={src} className={"ringPhoto ringPhoto-" + i} distance={30 + i * 14}>
                <img src={src} alt="" loading="lazy" />
              </ParallaxLayer>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
