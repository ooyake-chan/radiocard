import React, { Component } from 'react';

export function   ripple(e){
  e.currentTarget.insertAdjacentHTML('afterbegin', '<span class="ripple" style="left:' + e.pageX + 'px;top:' + e.pageY + 'px;"></span>')
}