# Stork

A web app to connect people in need with supplies during disasters.

http://stork-20b75.appspot.com/

To try it out with npm:

```
npm install
cd flaskr
flask run
```

---

_PennApps XX_

## Inspiration
In times of disaster, access to necessary supplies make a world of difference. This is limited not only by what aid is available but also the information channels of who needs what. The Red Cross will know what to bring to you, or better yet someone around the block could have exactly the formula your baby needs. People often want to help, but don't know how to help and what to donate.

## What it does
Stork is a platform that connects companies and individuals to help disaster victims by filling the information void by allowing disaster victims to list their needs to responders and those nearby who may be able to help out. It pinpoints victims' locations on the map which makes looking for what people need nearby convenient. Relief organizations can easily route based on where the victims in need are. Requests will also show when they were submitted so that responders can prioritize based on wait duration.

## How we built it
We used React and incorporated Google Maps APIs for the front-end. For the back-end we used Google Firestore to take advantage of its database capabilities and WebSocket with Flask for back-end. We deployed the app with Google Cloud App Engine.

## Challenges we ran into
We initially wanted to use more ambitious technology such as React Native for a mobile app. However, that proved to be too much of an ask due to our lack of experience with mobile development. Besides that, we ran into many issues with WebSocket, Flask and Firebase which we were using for the first time as well. Integration with React and Google Maps APIs was a particularly a difficult obstacle in our progress, as the compatibility documentation is not clearly defined.

## Accomplishments that we're proud of
We were successfully able to integrate React and Google APIs in the front-end with WebSocket, Flask, and Firebase in the back-end to create a functional platform. This project allowed everyone to have an opportunity to try new technology with this project. We are proud that we were able to apply our technical knowledge to a larger impact on social good and disaster relief.

## What we learned
Besides the new technology we were exposed to, we figured out how to adapt and pivot when issues arise with features. For example, we realized after a few hours that React Native wasn't feasible and made the hard decision to switch to a more familiar React. Even implementing log-in authentication can be extremely complicated when working with a new stack. It's important to have a balance of technology we are comfortable with and know when to pivot in order to complete the project.

## What's next for Stork
The logical next step for Stork would be a mobile app that would be more accessible during a disaster. In addition, a log-in feature with separate functionality for victims and suppliers would allow suppliers to match their inventory to nearby victims and check off need lists.


