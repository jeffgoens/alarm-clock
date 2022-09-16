## Pseudocode for Digital Alarm Clock 

### Assumptions:
  - Standard HTML5 Boilerplate tags

### HTML:
``` html
<div> class = container to hold all the elements    (used section instead)
<h2> id = clock                                     (used div)
<select> id = hours, minutes, seconds, ampm         (used an input)
<option> value = AM and PM                          (input provided this feature)
<button> id = set and stop alarm

```
### CSS:
```css
.container
#clock
input
.controls
.button
```
### SET: Define Objects and Variables
```
1. Objects
    - Date ()
    - toLocaleTimeString()
    - setTimeout or setInterval

2.Variables
    - let clock                  - let ampm         x
    - let hours       x          - let startstop    x
    - let minutes     x          - let currentTime
    - let seconds     x

```


### FUNCTION:
 
```js
Function showTime(): (changed to showClockTime)
  Date()
  currentTime

Function setAlarmTime();
  input value

        
Function setAlarm();
  input value


Function alarmAlert(); (used alert method)
  output value

  
Function clearAlarm():
  input value
 
```
 
### START:
```
showTime
setAlarmTime
setAlarm
alarmAlert

 ```
 
 
 ### END:
 ```
 clearAlarm
 ```

