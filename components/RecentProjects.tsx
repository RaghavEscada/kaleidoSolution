import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import MagicButton from "./MagicButton";

const RecentProjects = () => {
  // Function to handle opening the link dynamically based on the clicked project
 const handleProjectClick = (link) => {
  if (link) {
    // Open the project link (PDF or webpage) in a new tab
    window.open(link, "_blank");
  } else {
    console.error("The link is invalid or undefined.");
  }
};

  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500">
          Recent Projects.
        </span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] cursor-pointer"
            key={item.id}
            onClick={() => handleProjectClick(item.link)} // Pass the link dynamically from the projects array
          >
            <PinContainer title="View Docs">
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" className="w-full h-full object-cover" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-end mt-7 mb-3">
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500">
                    Docs
                  </p>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
      
      {/* Added centered button section */}
      <div className="w-full flex justify-center mt-16">
        
         <a 
  href="https://www.instagram.com/kaleido.solutions/"
  target="_blank" 
  rel="noopener noreferrer"
>
  <MagicButton
    title="View Our Social Gallery"
    icon={<FaLocationArrow />}
    position="right"
  />
</a>
      </div>
    </div>
  );
};

export default RecentProjects;
