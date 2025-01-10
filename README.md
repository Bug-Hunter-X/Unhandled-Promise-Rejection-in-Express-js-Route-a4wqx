# Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common error in Express.js applications: the lack of comprehensive error handling within asynchronous route handlers.  When an asynchronous operation (like a database query or external API call) fails, the error is often silently ignored, resulting in a poor user experience.

The `bug.js` file showcases the problematic code.  The `bugSolution.js` file provides a corrected version with proper error handling.

## Problem

The original code uses `.then()` to handle successful responses, but lacks a robust `.catch()` block to handle rejections.  If the `someAsyncOperation()` function throws an error, the client receives no response, and the error is only logged to the server console—this is insufficient.

## Solution

The corrected code includes a comprehensive `.catch()` block.  This block sends a proper error response (with an appropriate HTTP status code) to the client.  This provides informative feedback to the user, improving the overall application experience.

This example highlights the importance of always handling potential errors in asynchronous operations within Express.js routes.