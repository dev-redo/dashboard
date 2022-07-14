import ChannelReport from "../data/channel-report.json";

export const getChannels = () => {
    const numNaver = ChannelReport.reduce(function(n, person) {
        return person.channel === 'naver' ? n + 1 : n;
      }, 0);

      const numGoogle = ChannelReport.reduce(function(n, person) {
        return person.channel === 'google' ? n + 1 : n;
      }, 0);

      const numFacebook = ChannelReport.reduce(function(n, person) {
        return person.channel === 'facebook' ? n + 1 : n;
      }, 0);

      const numKakao = ChannelReport.reduce(function(n, person) {
        return person.channel === 'kakao' ? n + 1 : n;
      }, 0);
    
    return {numNaver, numGoogle, numFacebook, numKakao}
}