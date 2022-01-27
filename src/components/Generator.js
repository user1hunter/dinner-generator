import React, { useEffect, useState } from "react"

export const Generators = () => {
    const [users, assignUsers] = useState([])

    useEffect(
        () => {
            fetch()
                .then(res => res.json())
                .then(
                    (customers) => { }
                )
        },
        []
    )

    return (
        <h1>Dinner Generator</h1>

        {
            users.map(
                () => { }
            )
        }
    )
}