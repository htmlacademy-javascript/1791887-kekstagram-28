(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const s=(t,r)=>{t=Math.abs(t),r=Math.abs(r);const n=Math.ceil(Math.min(t,r)),c=Math.floor(Math.max(t,r)),e=Math.random()*(c-n+1)+n;return Math.floor(e)},a=t=>t[s(0,t.length-1)],l=()=>{let t=0;return()=>(t+=1,t)},m=25,d=6,f=15,p=200,g=20,h=["Всё отлично!","В целом всё неплохо. Но не всё.","Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.","Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.","Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.","Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"],y=["Пляж","Указатель показывает, направление до пляжа","Скалистый берег","Девушка на пляже с фотоаппаратом","Забавный мисо суп с человечками из риса","Японский автомобиль с открытой ламба дверью","На деревянной тарелке клубника разрезанная на две половики","Две прозрачные чашки с горячим напитком из красной смородины"],M=["Мария","Алексей","Артур","Виктор","Александр","Мариса","Мирон","Анна"],_=l(),N=()=>Array.from({length:s(1,2)},()=>a(h)).join(" "),O=()=>({id:_(),avatar:`img/avatar-${s(1,d)}.svg`,message:N(),name:a(M)}),C=t=>({id:t,url:`photos/${t}.jpg`,description:a(y),likes:s(f,p),comments:Array.from({length:s(0,g)},O)}),u=()=>Array.from({length:m},(t,r)=>C(r+1));u();const T=document.querySelector("#picture").content.querySelector(".picture"),I=document.querySelector(".pictures"),S=({comments:t,description:r,likes:n,url:c})=>{const e=T.cloneNode(!0);return e.querySelector(".picture__img").src=c,e.querySelector(".picture__img").alt=r,e.querySelector(".picture__comments").textContent=t.length,e.querySelector(".picture__likes").textContent=n,e},E=t=>{const r=document.createDocumentFragment();t.forEach(n=>{const c=S(n);r.append(c)}),I.append(r)};E(u());
