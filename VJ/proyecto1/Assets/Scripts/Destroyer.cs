/*
Script to destroy balls that go out of the scene to avoid having to many balls

Santiago Rodríguez
*/

using UnityEngine;

public class Destroyer : MonoBehaviour
{
    void OnCollisionEnter2D(Collision2D col)
    {
        Destroy(col.gameObject);
    }
}
