"use strict";
const ORGA_PASSWORD = "fullmoon2026";
function orgaIsUnlocked(){ return localStorage.getItem("fullmoon_v22_unlocked") === "1" || localStorage.getItem("fullmoon_v21_unlocked") === "1"; }
function orgaUnlock(){ localStorage.setItem("fullmoon_v22_unlocked","1"); localStorage.setItem("fullmoon_v21_unlocked","1"); }
function orgaLogout(){ localStorage.removeItem("fullmoon_v22_unlocked"); localStorage.removeItem("fullmoon_v21_unlocked"); location.href="organisation.html"; }
function requireOrgaAccess(){ if(!orgaIsUnlocked()) location.href="organisation.html"; }
