/*
Keep track of points scored

Santiago Rodríguez
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class Score : MonoBehaviour
{
    [SerializeField] TMP_Text scoreText;
    [SerializeField] ParticleSystem particles;
    int points;
    // Start is called before the first frame update
    void Start()
    {
        points = 0;
        scoreText.text = "Score: 0";
    }

    // If the ball passes through the hoop add a point
    void OnTriggerEnter2D(Collider2D col)
    {
        points += 1;
        scoreText.text = "Score: " + points;

        // emit particles
        particles.Emit(5);
    }
}
