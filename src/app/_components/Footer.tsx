const Footer = () => {
  return (
    <footer className="mt-[52px] w-full bg-[#4338CA]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-5 py-10 sm:px-8 md:px-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12 xl:px-0">
        {/* Logo & Copyright */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={21}
              fill="none"
              viewBox="0 0 20 21"
            >
              <path
                stroke="#FAFAFA"
                d="M5.834 2.167v16.666m8.333-16.666v16.666M1.667 10.5h16.667M1.667 6.333h4.167m-4.167 8.334h4.167m8.333 0h4.167m-4.167-8.334h4.167M3.484 2.166h13.033c1.003 0 1.817.814 1.817 1.817v13.034a1.817 1.817 0 0 1-1.817 1.816H3.484a1.817 1.817 0 0 1-1.817-1.816V3.982c0-1.003.813-1.817 1.817-1.817Z"
              />
            </svg>

            <h4 className="text-base font-bold italic text-white">
              Movie Z
            </h4>
          </div>

          <div className="text-sm text-[#FAFAFA]">
            © 2024 Movie Z. All Rights Reserved.
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:gap-12 lg:gap-16 xl:gap-[96px]">
          {/* Contact Information */}
          <div className="flex flex-col gap-3">
            <div className="text-sm font-medium text-[#FAFAFA]">
              Contact Information
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
                className="mt-0.5 shrink-0"
              >
                <path
                  stroke="#FAFAFA"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.667 4.667-5.98 3.8a1.293 1.293 0 0 1-1.373 0l-5.98-3.8m1.333-2h10.667c.736 0 1.333.596 1.333 1.333v8c0 .736-.597 1.333-1.333 1.333H2.667A1.333 1.333 0 0 1 1.334 12V4c0-.737.597-1.333 1.333-1.333Z"
                />
              </svg>

              <div className="text-sm text-[#FAFAFA]">
                Email:
                <br />
                support@movieZ.com
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
                className="mt-0.5 shrink-0"
              >
                <g clipPath="url(#a)">
                  <path
                    stroke="#FAFAFA"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.667 11.28v2a1.332 1.332 0 0 1-1.453 1.334 13.193 13.193 0 0 1-5.754-2.047 13 13 0 0 1-4-4 13.193 13.193 0 0 1-2.046-5.78A1.333 1.333 0 0 1 2.74 1.334h2A1.333 1.333 0 0 1 6.074 2.48a8.56 8.56 0 0 0 .466 1.874 1.333 1.333 0 0 1-.3 1.406l-.846.847a10.667 10.667 0 0 0 4 4l.846-.847a1.333 1.333 0 0 1 1.407-.3 8.56 8.56 0 0 0 1.873.467 1.333 1.333 0 0 1 1.147 1.353Z"
                  />
                </g>

                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h16v16H0z" />
                  </clipPath>
                </defs>
              </svg>

              <div className="text-sm text-[#FAFAFA]">
                Phone:
                <br />
                +976 (11) 123-4567
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-3 text-sm text-[#FAFAFA]">
            <p>Follow us</p>

            <div className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-3">
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
              <p>Youtube</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;