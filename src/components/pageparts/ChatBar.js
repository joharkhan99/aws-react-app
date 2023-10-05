import React from "react";
function ChatBar() {
  return (
    <div className="chatBar off-white overflow-hidden position-relative border-start border-custom-color">
      <div className="chatbar-header d-flex justify-content-between align-items-center p-2 mb-2 custom-border">
        <button className="border-0 dots-menu rounded-1 off-white p-1">
          <svg
            width="100%"
            height="100%"
            version="1.1"
            viewBox="0 0 20 20"
            x="0px"
            y="0px"
            fill="#efeff1"
          >
            <g>
              <path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path>
            </g>
          </svg>
        </button>
        <h2 className="text-size-13 fw-600 m-0">STREAM CHAT</h2>
        <span className="text-center">
          {/* <i class="fa-solid fa-video"></i> */}
        </span>
      </div>

      <div className="chat-area overflow-auto">
        <div className="chat-message-box p-2">
          <ul className="list-unstyled m-0 p-0 chat-list">
            <li className="text-size-13 p-2 rounded-1 d-flex gap-2 align-items-top">
              <div className="comment-img">
                <img
                  class="rounded-circle"
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/c7aaf7b0-49c7-4dd3-8228-861478bfd435-profile_image-70x70.png"
                  alt=""
                  style={{ width: "25px", height: "25px" }}
                />
              </div>
              <div className="comment-detail">
                <span className="gray-color fw-600 px-1 pl-0">Stpjuice</span> i
                am never watching onepice... everytime i start watching it, i
                have had an accident :")
              </div>
            </li>
            <li className="text-size-13 p-2 rounded-1 d-flex gap-2 align-items-top">
              <div className="comment-img">
                <img
                  class="rounded-circle"
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/e4e40827-cb49-4dd5-a274-dab81a84e337-profile_image-70x70.png"
                  alt=""
                  style={{ width: "25px", height: "25px" }}
                />
              </div>
              <div className="comment-detail">
                <span className="gray-color fw-600 px-1 pl-0">Lorem</span>
                somethin good
              </div>
            </li>
            <li className="text-size-13 p-2 rounded-1 d-flex gap-2 align-items-top">
              <div className="comment-img">
                <img
                  class="rounded-circle"
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/c7aaf7b0-49c7-4dd3-8228-861478bfd435-profile_image-70x70.png"
                  alt=""
                  style={{ width: "25px", height: "25px" }}
                />
              </div>
              <div className="comment-detail">
                <span className="gray-color fw-600 px-1 pl-0">Itzy</span>I had
                an accident yesterday! It was terrible
              </div>
            </li>
            <li className="text-size-13 p-2 rounded-1 d-flex gap-2 align-items-top">
              <div className="comment-img">
                <img
                  class="rounded-circle"
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/e4e40827-cb49-4dd5-a274-dab81a84e337-profile_image-70x70.png"
                  alt=""
                  style={{ width: "25px", height: "25px" }}
                />
              </div>
              <div className="comment-detail">
                <span className="gray-color fw-600 px-1 pl-0">Bitcoin</span>
                bitcoin may fail by 2050 bcz of economic fall
              </div>
            </li>
            <li className="text-size-13 p-2 rounded-1 d-flex gap-2 align-items-top">
              <div className="comment-img">
                <img
                  class="rounded-circle"
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/16bf467e-7593-4999-b0ca-72605852441a-profile_image-70x70.png"
                  alt=""
                  style={{ width: "25px", height: "25px" }}
                />
              </div>
              <div className="comment-detail">
                <span className="gray-color fw-600 px-1 pl-0">Jesse</span>I wish
                I knew bitcoin and NFTs before working with Walter white
              </div>
            </li>
            <li className="text-size-13 p-2 rounded-1 d-flex gap-2 align-items-top">
              <div className="comment-img">
                <img
                  class="rounded-circle"
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/e4e40827-cb49-4dd5-a274-dab81a84e337-profile_image-70x70.png"
                  alt=""
                  style={{ width: "25px", height: "25px" }}
                />
              </div>
              <div className="comment-detail">
                <span className="gray-color fw-600 px-1 pl-0">gus_Fring</span> i
                am never watching onepice... everytime i start watching it, i
                have had an accident :")
              </div>
            </li>
            <li className="text-size-13 p-2 rounded-1 d-flex gap-2 align-items-top">
              <div className="comment-img">
                <img
                  class="rounded-circle"
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/16bf467e-7593-4999-b0ca-72605852441a-profile_image-70x70.png"
                  alt=""
                  style={{ width: "25px", height: "25px" }}
                />
              </div>
              <div className="comment-detail">
                <span className="gray-color fw-600 px-1 pl-0">Carmelo</span>
                Big fan of you stats
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="input-area bg-dark">
        <div class="icon-input position-relative d-flex gap-2 p-3 pb-2 justify-content-between">
          <div className="comment-write-user">
            <img
              class="rounded-circle"
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/c7aaf7b0-49c7-4dd3-8228-861478bfd435-profile_image-70x70.png"
              alt=""
              style={{ width: "25px", height: "25px" }}
            />
          </div>
          <div className="w-100 comment-input-box">
            <span className="gray-color fw-600 px-1 pl-0 d-block text-size-13">
              Lorem
            </span>
            <textarea
              type="text"
              class="form-control m-0 text-size-13 bg-transparent d-block text-white chat-input-box pl-0"
              placeholder="Write a comment..."
            ></textarea>
          </div>
          {/* <button className="rounded-1 p-2 py-1 text-center">
            <i class="fa-regular fa-face-smile"></i>
          </button> */}
        </div>

        <div className="position-relative d-flex gap-2 p-3 pt-0 justify-content-between">
          <div>
            <button className="rounded-1 text-center off-white border-0 dots-menu text-center">
              <i class="fa-regular fa-face-smile"></i>
            </button>
          </div>
          <div>
            <button class="border-0 text-size-13 p-1 px-2 dots-menu mx-2 rounded-1 off-white">
              <svg
                viewBox="0 0 24 24"
                fill="white"
                class="style-scope yt-icon"
                style={{
                  width: "20px",
                }}
              >
                <g class="style-scope yt-icon">
                  <path
                    d="M4.01,4.62l14.12,7.07l-3.06-0.66L4,8.64L4.01,4.62 M18.13,12.32L4.01,19.38L4,15.36l11.07-2.39L18.13,12.32 M3.01,3L3,9.44 L14.86,12L3,14.56L3.01,21L21,12L3.01,3L3.01,3z"
                    class="style-scope yt-icon"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
        </div>

        {/* <div className="d-flex justify-content-between mt-2 align-items-center">
          <div>
            <button class="border-0 dots-menu rounded-1 off-white p-1 mx-2">
              <i class="fa-solid fa-gear"></i>
            </button>
            <button class="border-0 fw-600 text-size-13 p-1 px-2 bg-primary2 hover1 mx-2 rounded-1 off-white">
              Chat
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
export default ChatBar;
