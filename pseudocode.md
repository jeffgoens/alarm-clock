## Pseudocode for Digital Alarm Clock 

### Assumptions:
  - Standard HTML tags

### HTML:
``` html
<div> class = "container" to hold all the elements
<h2> id = "timer" 
<select> id = "hours", "minutes", "seconds", "ampm"
<option> value = "AM" and "PM"  
<button> id = "startstop"
  
```

### SET: Define Objects and Variables
```
1. Objects
    - Date ()

2.Variables
    - let timer                 - let ampm
    - let hours                 - let startstop
    - let minutes               - let currentTime
    - let seconds

```


### FUNCTION:
 
```js
FUNCTION checkDoorStatus:
  IF door = open
    THEN
      do not accept passcode
        END
  ELSE 
    door = closed
      THEN
        accept passcode
          END
        
FUNCTION checkControlPanel
  IF controlPanel = not paired to motorUnit
    THEN
      END
  ELSE 
    controlPanel = paired to motorUnit
      accept passcode
        END

 FUNCTION checkPasscode:
  IF passcode entered = correct
    THEN
      open door motorUnit and clearMemory     
  ELSE 
    passcode entered = wrong  
      THEN
        alert user and clearMemory
          END
          
FUNCTION clearMemory
  IF wrong passcode is entered OR door has been opened
    THEN
      clearMemory
        END

 ```
 
 
 ### START:
 ```
 checkDoorStatus
 checkControlPanel
 checkPasscode
 
 controlPanel
 motorUnit
 ```
 
 
 ### END:
 ```
 clearMemory
 ```

