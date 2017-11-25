<template>
  <div id="CodeOfConduct">
    <h2 class="Title">行为准则</h2>
    <div class="centents">
      <p>Free Code Camp is friendly place to learn to code. We’re committed to keeping it that way.</p>
      <p>All campers are required to agree with the following code of conduct. We’ll enforce this code. We’re expecting cooperation from all campers in ensuring a friendly environment for everybody.</p>
      <p>n short: be nice to your fellow campers.</p>
      <p>Remember these 3 things and your fellow campers will like you:</p>
      <ol type="I" start="1">
        <li>Compliment your fellow campers when they do good work. Congratulate them when they accomplish something (like completing one of our certifications or getting a job).</li>
        <li>Critique the work, not the camper doing it.</li>
        <li>Only argue about something if it’s important to the greater discussion.</li>
      </ol>
      <p>Free Code Camp should be a harassment-free experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, national origin, or religion (or lack thereof).</p>
      <p>We do not tolerate harassment of campers in any form, anywhere on Free Code Camp’s online media (Gitter, Twitch, Facebook, etc.) or during pair programming. Harassment includes sexual language and imagery, deliberate intimidation, stalking, unwelcome sexual attention, libel, and any malicious hacking or social engineering.</p>
      <p>If a camper engages in harassing behavior, our team will take any action we deem appropriate, up to and including banning them from Free Code Camp.</p>
      <p>No bots are allowed in any of the Official Chat Rooms without prior explicit permission from the FCC Core Team.</p>
      <p>We want everyone to feel safe and respected. If you are being harassed or notice that someone else is being harassed, say something! Go to our <a href="https://gitter.im/freecodecamp/admin">Admin room in Gitter</a>   and explain what has happened where (preferably with a screen shot of the offending language) so we can take fast action.</p>
      <p>If you have questions about this code of conduct, email us at <a target="_blank" href="mailto:team@freecodecamp.com ">team@freecodecamp.com</a></p>
    </div>
  </div>
</template>
</div>
</div>
</template>
<script>
export default {
  name: "faq",
  data() {
    return {

    };
  },
  methods: {},
  components: {

  }
};

</script>
<style lang="scss" scoped>
.Title {
  text-align: center;
  padding: 10px;
}

.centents {
  padding: 15px 0;
  ol li {
    line-height: 40px;
    margin-left: 50px;
    list-style-type: decimal;
  }
  p {
    margin-bottom: 15px;
  }
}

</style>
