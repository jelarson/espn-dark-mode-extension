/* eslint-disable no-undef */
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({
    running: false,
  })
  // chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
  //   chrome.declarativeContent.onPageChanged.addRules([
  //     {
  //       conditions: [
  //         new chrome.declarativeContent.PageStateMatcher({
  //           pageUrl: { hostEquals: '' },
  //         }),
  //       ],
  //       actions: [new chrome.declarativeContent.ShowPageAction()],
  //     },
  //   ])
  // })
})
