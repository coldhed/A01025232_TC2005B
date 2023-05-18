using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BellMotion : MonoBehaviour
{
    [SerializeField] float angleLimit;
    [SerializeField] float speed;
    [SerializeField] float ringDuration;
    
    AudioSource audioSource;
    float angle;
    int direction = 1;
    float t = 0.5f;
    bool isRinging = false;
    float timeElapsed;

    // Start is called before the first frame update
    void Start()
    {
        audioSource = GetComponent<AudioSource>();
    }

    // Update is called once per frame
    void Update()
    {
        if (isRinging) {
            timeElapsed += Time.deltaTime;
            Ring();

            if (timeElapsed > ringDuration) {
                isRinging = false;
            }
        }

        // if (Input.GetKeyDown(KeyCode.R)) {
        //     StartRing();
        // }
    }

    public void StartRing() {
        audioSource.Play();
        t = 0.5f;
        timeElapsed = 0;
        isRinging = true;
    }

    void Ring() {
        angle = Mathf.Lerp(-angleLimit, angleLimit, t);
        transform.localRotation = Quaternion.Euler(0, 0, angle);

        t += direction * speed * Time.deltaTime;

        if (t > 1 || t < 0) direction *= -1;
    }
}
