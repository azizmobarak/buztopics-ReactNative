import React from 'react';
import {ToastAndroid} from 'react-native';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
  } from 'expo-ads-admob';
  
const onError=(text)=>{
  ToastAndroid.show(text, ToastAndroid.SHORT);
}

export const BannerAd=()=>(
<AdMobBanner
style={{backgroundColor:"transparent"}}
 adUnitID="ca-app-pub-3940256099942544/6300978111"
 bannerSize="fullBanner"
 servePersonalizedAds 
 onDidFailToReceiveAdWithError={(e)=>onError(e)}
/>
);

export const BannerAd2=()=>(
  <PublisherBanner
  style={{backgroundColor:"gray"}}
   adUnitID="ca-app-pub-3940256099942544/6300978111"
   servePersonalizedAds 
   bannerSize="smartBannerPortrait"
   onDidFailToReceiveAdWithError={(e)=>onError(e)}
  />
  );

  export const BannerAd3=()=>(
    <PublisherBanner
    style={{backgroundColor:"transparent"}}
     adUnitID="ca-app-pub-3940256099942544/6300978111"
     servePersonalizedAds 
     bannerSize="banner"
     onDidFailToReceiveAdWithError={(e)=>onError(e)}
    />
    );

 export const BannerAd4=()=>(
      <AdMobBanner
      style={{
        backgroundColor:"transparent"
        }}
       adUnitID="ca-app-pub-3940256099942544/6300978111"
       servePersonalizedAds 
       bannerSize='fullBanner'
       onDidFailToReceiveAdWithError={(e)=>onError(e)}
      />
      );
