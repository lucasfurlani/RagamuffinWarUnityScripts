﻿#pragma strict

public class PauseButton extends GameButton {
	private var instance : GameManager;
	public var menu : GameObject;
		
	function buttonPressed () {
		invertPause();
	}

	function invertPause() {
	    instance = MonoBehaviour.FindObjectOfType(GameManager);
	    if (instance == null) {
	    	Debug.Log("There is no GameManager instance");
		} else {
			if (instance.isPaused) {
				unpauseGame();
			} else {
				pauseGame();
			}
		}
	}

	function pauseGame() {
	    instance = MonoBehaviour.FindObjectOfType(GameManager);
	    if (instance == null) {
	    	Debug.Log("There is no GameManager instance");
		} else {
			instance.isPaused = true;
			menu.SetActive(true);
			guiTexture.color = Color.gray;
			this.gameObject.SetActive(false);
			Debug.Log("Game paused.");
		}
	}

	function unpauseGame() {
	    instance = MonoBehaviour.FindObjectOfType(GameManager);
	    if (instance == null) {
	    	Debug.Log("There is no GameManager instance");
		} else {
			instance.isPaused = false;
			Debug.Log("Game unpaused.");
		}
	}
}
