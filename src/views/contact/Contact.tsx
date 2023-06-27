import React from "react";
import { TextField, Container, Box } from "@/components/common";
import Layout from "@/components/globals/Layout";
import { BsArrowRight } from "react-icons/bs";

const styles = {
  formControl: "border-b w-full py-3 text-light-gray placeholder-light-gray",
};

const About = () => {
  return (
    <Layout showHero={false}>
      <Container variant="fluid" spacingY={28} className="py-10">
        <Box className="grid md:grid-cols-2 gap-5 md:gap-10 min-h-screen">
          <Box spacingY={4}>
            <TextField
              component="h1"
              variant="title"
              text={"Get in touch to learn how we can help"}
              className="md:w-3/4"
            />
            <TextField
              component="p"
              variant="subtitle1"
              text={
                "Have a project in mind? consectetur accumsan purus nullam iaculis scelerisque the new something."
              }
              className="md:w-3/4"
            />
          </Box>
          <Box>
            <form action="" className="grid md:grid-cols-2 gap-5 md:gap-7">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Name*"
                  className={styles.formControl}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Last Name*"
                  className={styles.formControl}
                />
              </div>

              <div className="form-group md:col-span-2">
                <input
                  type="text"
                  placeholder="Company"
                  className={styles.formControl}
                />
              </div>

              <div className="form-group md:col-span-2">
                <input
                  type="email"
                  placeholder="Email*"
                  className={styles.formControl}
                />
              </div>

              <div className="form-group md:col-span-2">
                <input
                  type="text"
                  placeholder="Phone*"
                  className={styles.formControl}
                />
              </div>

              <div className="form-group md:col-span-2">
                <select className={styles.formControl}>
                  <option value="" selected>
                    Location
                  </option>
                  <option value="">Option 2</option>
                </select>
              </div>

              <div className="form-group md:col-span-2">
                <input
                  type="text"
                  placeholder="Current Website"
                  className={styles.formControl}
                />
              </div>

              <div className="form-group md:col-span-2">
                <select className={styles.formControl}>
                  <option value="" selected>
                    How we can help?
                  </option>
                  <option value="">Option 2</option>
                </select>
              </div>

              <div className="form-group md:col-span-2">
                <button
                  type="submit"
                  className="inline-flex justify-start items-center space-x-2 border border-dark-gray py-3 px-5 hover:bg-white hover:text-dark transition-all duration-500"
                >
                  <span>Submit</span>
                  <BsArrowRight />
                </button>
              </div>
            </form>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default About;
