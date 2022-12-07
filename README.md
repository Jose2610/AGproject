# Approachable Geek Coding Project
This mobile application is a coding project by Approachable Geek to demonstrate where my technical skills currently are.

## Coding Assignment

> Create a mobile application that appears to have the functionality of a profile page. Data does not need to be saved to a database, but the application should appear to function as expected until refreshed/restarted.

## Requirements

- Use any mobile technology(ies) you desire.
- Allow users to edit their profile information, including: name, number, email, and bio.
- Use the provided UI as a guide (https://xd.adobe.com/view/58778ee1-0bc4-40d9-55fb-cea5b22ab1c8-2e46/).
- Bonus: Allow the users to edit their profile picture.

## Approach

For this coding project, I decided to use React Native as my mobile framework, as I already have some experience with React and a little bit with React Native. Also, React Native can build native apps for Android and iOS, which made it easier to program, test, and build. I also used several packages to make designing simple, such as an image picker, a modal component, an icon library, and a phone number formatter.

Throught the project, I used the UI provided as a guide to use while programming. I decided to create the application in parts, two screens and several components. One screen was used for the profile page, while the second screen was used for editing the user's profile.

### Mobile Technologies Used

- Android Studio
- Visual Studio Code
- Git/GitHub
- React Native
- React Navigation
- react-native-image-picker
- react-native-modal
- react-native-phone-number-input-formatted
- react-native-vector-icons

## Progress Timeline

As I was tasked with keeping track of how long it took me to program this application, I thought it be nice to show the kind of process I made throughout each day. Below is a brief description of what I spent most of my time working on this project.

#### Wednesday

> Wednesday afternoon I spend ***2 hours*** setting up React Native and Andriod Studio, including all the necessary tools to start production. There were some virtualization issues, as the computer I have is still new and I'm still figuring out how to deal with AMD-specific processes, but I was finally successful in running the test application onto a virtual Android device.

#### Thursday

> I spent around ***5 hours*** programming the main profile page, being able to complete the profile picture component, including getting pictures from the user's gallery and/or taking a picture and replacing the old profile picture with the newly selected one. I did have some problems when the camera refused to open on the virtual device, but this was later solved by adding Android Permissions to access the user's camera and storage. I also had fun stylizing the profile picture component, as I was also learning more about how to use React Native and its StyleSheets.

#### Friday

> I then started to add the fields onto the profile page (name, email, phone number, and bio) and styled it similarly to the UI example given. Afterward, I began to work on the second screen, the Edit page, where the user can modify their profile page with the fields used. I was able to implement validations for each field, making sure it made sense that the user was editing appropriately. I was also successful in moving the values from the profile fields from the profile page to the edit page, and once the changes were made, the new values would then overwrite the previous fields, updating the profile page. This took around ***7 hours*** to accomplish.

#### Saturday
> Starting on Saturday, I cleaned up my code and began the process of building the application for Android. This process took ***3 hours***, as the step-by-step guide on React Native's website was quite helpful in making the process simple and easy. Finally, after the APK was made, I tested the APK file on both virtual and real devices, each being successful.

Overall, this project took me around ***17 hours*** to complete. Whether or not this is swift or sluggish, I do feel as if I finished too quickly, and gave me the feeling that I was missing something important. However, I do know that it would have taken longer if I was able to build the application on iOS, and if I was given an Apple computer capable to install the necessary libraries and tools I could have finished the build just as quickly as building the Android apk. This is not due to my programming abilities per se, but it mainly comes down to React Native having native code that translates well to both Android and iOS platforms. All in all, this project was delightful to be a part of and I thank Approachable Geek for allowing me to attempt something I didn't think I could reach without being put outside of my comfort zone and attempting something new.

## Issues

There are several issues that I did come across while creating this application, though most of the issues do not affect the performance or the installation of the app. 

One issue is when going to the edit page, the keyboard will automatically pop up and focus on the phone number text input. This is most likely due to the react-native-phone-number-input-formatted package, as I tried to turn autoFocus off to prevent this from happening, though it did not work. The best solution for this is to remove this component and create the phone number as a TextInput component, just like the other profile fields. This would not only let me turn off the autoFocus, but the styling choices from the other fields would match up with the phone number field. However, the reason why I chose to use this package is **1)** when typing the phone number automatically formats into (XXX) XXX-XXXX and **2)** it included a country code picker which was convenient to have. 

Another minor issue I came across was when inputting a black bio, the bio would not update to an empty bio in the profile page, but rather retain the previous bio that it had before entering the previous page. This could be an issue with passing empty parameters back to a previous page with React Navigation or React Native, but I'm not too sure why this happens. A possible solution could be restricting the user from creating an empty bio, but it would be odd to have an app not allow a user to omit to have a bio on their profile page.

## Final Remarks

Overall, I had quite a lot of fun learning how to use React Native again after some time, and after using React for side projects and testing new ideas, it was a lot easier to use React Native than before in university. There can always be improvements, especially on the issues I specified and some of the design choices I made, but I'm quite happy with what I was able to accomplish in this coding project.

## Installation Guide/Running the Application

Before I give the step-by-step instructions on running my application, please note that I ran this on a Windows 10 desktop with an AMD processor. These steps may differ on the type of operating system and/or processor your computer may have. If any issues come with this guide, please don't hesitate to contact me at jose2610sanchez@outlook.com or use this guide for supplementary advice on how to run an application on Android Studio at https://developer.android.com/studio/run/emulator.

### Running Application on Android (Virtual)

#### Step 1:

Make sure to install the latest version of Android Studio.

#### Step 2:

Open Android Studio and click on the three vertical dots ⋮ and click on Virtual Device Manager.

#### Step 3:

Once inside the Device Manager window, run an AVD with the latest Android API (this application was tested with the Android Tiramisu Google API | x86_64). If there is no AVD in this window, then please use this guide to create an AVD https://developer.android.com/studio/run/managing-avds, however, there should be at least two default AVDs built into Android Studio.

#### Step 4:

Click on the run button ► on the AVD you want to emulate with to start the emulation.

#### Step 5:

Once the emulated device has started up, navigate the AGproject folder to find the built APK. The location should be AGproject\android\apks\app-release.apk. Then simply drag and drop the file onto the emulated device. A tooltip should appear saying **APK's will be installed.**. The application should then be installed on the device and should be ready to run!

> *If you would like to run the application on a real Android device, simply place the APK found in step 5 and place that in your phone's storage device. Then, on your phone, open the files app and locate the APK copied on your device. Click on the apk and the application should download. However, I do understand the issues with privacy that may come with installing an untrusted application on your device. If you would not like to do this, then please follow the virtual guide. I will post a video that you could view from my device with the apk being installed and used, however, if you decide not to download it onto your device. Video of the demonstration using my actual device is here if you'd like to see it on a Samsung device (https://youtu.be/sJt1wWm59BE).*

### Running Application on iOS (Virtual)
Unfortunately, I do not have/own a Mac or Apple computer to program this application onto iOS, therefore I could not build and test the application on iOS devices. I was however able to borrow a MacBook from a friend but was unsuccessful in downloading the necessary packages to set up the development environment of the program. While I am not sure if the application would have run without any modifications or tweaks, I am still happy to have at least accomplished building and running the application on Android.
