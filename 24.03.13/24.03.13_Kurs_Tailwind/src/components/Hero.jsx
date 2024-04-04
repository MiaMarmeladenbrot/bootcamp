const Hero = () => {
  return (
    <section className="flex justify-between items-center gap-10 mb-10">
      <div>
        <p className="font-bold mb-5">Branding | Image making </p>
        <h1 className="text-6xl font-bold mb-5">My awesome portfolio</h1>
        <p c>And I made it myself! Yes. In Figma with Anima</p>
      </div>
      <img className="max-w-[50%]" src="./Image.png" alt="img" />
    </section>
  );
};

export default Hero;
