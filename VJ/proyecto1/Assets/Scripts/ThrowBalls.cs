/*
Create copies of a ball object to fall on the game scene

Santiago Rordíguez
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ThrowBalls : MonoBehaviour
{
    [SerializeField] GameObject ball;
    [SerializeField] float delay;
    [SerializeField] float limit;

    // Start is called before the first frame update
    void Start()
    {
        // Call the function at regular intervals
        InvokeRepeating("CreateBall", delay, delay);
    }

    void CreateBall() 
    {
        // Generate a new position for the ball
        Vector3 newPos = new Vector3(Random.Range(-limit,limit), 4, 0);
        // create a copy of the ball prefab
        Instantiate(ball, newPos, Quaternion.identity);
    }
}
