import React from "react";
import Partners from "@/views/home/partners/Partners";
import OurServices from "@/views/about/our-services/OurServices";
import OurExpertise from "@/views/about/our-expertise/OurExpertise";
import WorkWithUs from "@/views/home/work-with-us/WorkWithUs";
import { TextField, Container, Image, Box } from "@/components/common";
import Layout from "@/components/globals/Layout";
import AboutImage from "@/images/about.png";

const About = () => {
  return (
    <Layout
      height="md:min-h-[60vh]"
      scrollTitle="Scroll Down"
      title={
        <TextField component={"h1"} variant="title">
          We have extensive knowledge of how the <i>platform</i> works, and how
          to <i>maximise</i> it.
        </TextField>
      }
    >
      <Container variant="fluid" spacingY={28} className="py-16">
        <Image
          variant={"rounded"}
          alt={""}
          src={AboutImage}
          objectFit="cover"
          className="md:h-[90vh] w-full"
          fill={false}
        />

        <TextField
          component={"div"}
          variant="title"
          spacingY={7}
          className="md:w-3/4"
        >
          <p>
            Over the last <i>ten years</i> we've worked on projects for clients,
            who range from <i>startups, Shopify Plus agencies</i> to some of the
            fastest growing brands in the world.
          </p>
          <p>
            We utilise our <i>experience</i> and knowledge of Shopify to help
            our clients reach new heights. We're a development focused studio
            that bring beautiful designs to life and craft strategies on how to
            exceed all expectations.
          </p>
        </TextField>
      </Container>
      <OurExpertise />

      <Container variant="fluid" spacingY={28} className="py-16">
        <Box
          className="bg-cover bg-no-repeat p-7 min-h-[90vh] rounded-lg"
          style={{
            backgroundImage: `url('images/about2.png')`,
          }}
        >
          <Box className="md:w-1/2" spacingY={5}>
            <TextField variant="title" component="div">
              “The <i>project lorem ipsum</i> dolor sit amet consectetur. Ornare
              lectus quis commodo quisque amet quis sed eu. Mauris tellus
              placerat <i>tellus”</i>
            </TextField>
            <Box>
              <TextField
                variant="subtitle1"
                component="div"
                text="NAME LASTNAME"
              />
              <TextField
                variant="subtitle2"
                component="div"
                text="E-Commerce Consultant"
              />
            </Box>
          </Box>
        </Box>
      </Container>
      <OurServices />
      <Container variant="fluid" className="py-7">
        <hr />
      </Container>
      <Partners title="We partner with startups, Shopify Plus agencies and some of the fastest growing brands in the world" />
      <WorkWithUs />
    </Layout>
  );
};

export default About;
