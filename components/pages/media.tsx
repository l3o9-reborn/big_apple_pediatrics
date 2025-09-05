import { mediaVideos } from "@/lib/data";
import MotionHead from "../motionHead";

export default function MediaSection() {
  return (
    <section id="media" className="py-12 bg-muted/50">
      <div className="max-w-[1600px] mx-auto px-10 md:px-20 lg:px-36">
          <MotionHead
              head="<span class='text-amber-700/60 font-normal'>Media</span> Appearances"
              paragraph=" Some of Dr. Ward&apos;s appearances in the media, where she shares her expertise in pediatrics and child health with the wider community."
          />
        <div className="py-10">
          <h3 className="text-3xl font-thin text-amber-700/80 mb-6">
            News and Media
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Featured big video */}
            <iframe
              className="w-full h-[300px] md:h-[400px] rounded-lg"
              src="https://www.youtube.com/embed/Yc_ZLTx-zhk?si=9JJ1FiFpuRT5J5Q2"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            {/* Smaller video grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {mediaVideos.map((media) => (
                <iframe
                  key={media.id}
                  className="w-full h-[180px] rounded-lg"
                  src={media.source}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-3xl font-thin text-amber-700/80 mb-6">
            Podcasts
          </h3>
          <iframe className="rounded-xl "
           frameBorder="0" height="200" scrolling="no" src="https://playlist.megaphone.fm/?e=FOXM9893633153&light=true"
            width="100%"></iframe>
        </div>
      </div>
    </section>
  );
}
