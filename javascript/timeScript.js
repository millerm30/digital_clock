"use strict";

const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");
const ampm = document.querySelector("#ampm");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const newHours = hours > 12 ? hours - 12 : hours;

  hour.innerText = newHours;
  minute.innerText = minutes < 10 ? `0${minutes}` : minutes;
  second.innerText = seconds < 10 ? `0${seconds}` : seconds;
  ampm.innerText = hours >= 12 ? "PM" : "AM";
}

function initTime() {
  getTime();
  setInterval(getTime, 1000);
}

initTime();

const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

function getDate() {
  const date = new Date();
  const days = date.getDate();
  const months = date.getMonth();
  const monthsToName = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const newMonths = monthsToName[months];
  const years = date.getFullYear();

  day.innerText = days < 10 ? `0${days}` : days;
  month.innerText = newMonths;
  year.innerText = years;
}

function initDate() {
  getDate();
}

initDate();

