interface Day {
    title: string;
    description: string;
    slug: string;
    externalLinks: {
        docs: string,
        demo: string
    }
}

export default <Array<Day>>[
    // { // ---------------------------------- day 1
    //     title: "error boundaries",
    //     description: "This is a long-awaited and much-requested feature, that allows you to isolate and recover from errors that occur during rendering.",
    //     slug: "/day/1",
    //     externalLinks: {
    //         docs: "https://svelte.dev/docs/svelte/svelte-boundary",
    //         demo: "https://svelte.dev/tutorial/svelte/svelte-boundary"
    //     }
    // },
    // { // ---------------------------------- day 2
    //     title: "each without as",
    //     description: "If you just want to render something in an {#each ...} block n times, and don't care about the value, you can now omit the as part.",
    //     slug: "/day/1",
    //     externalLinks: {
    //         docs: "https://svelte.dev/docs/svelte/each#Each-blocks-without-an-item",
    //         demo: "https://svelte.dev/playground/untitled?version=5.6.2#H4sIAAAAAAAAA3WP3WrDMAyFX0VoDFqWtGRXxWsKY4-x7MKx1SbUtY2tdi0h7z7s_myD9k6c8-lIZ0Ard4QCPzqKEVong8YC172hiOJzQD75ZCcBiyv87v0sHshw0loZ6Z6unGWyHFHgUvcHUEbGWDeo0qUyX2pw1diGhyeSqoMBDNkNdwIWMBYQpN2OyX4EpJ8uQMO_J0RrpNrWwyQFwEvGpvAMr1DXNVTjajnX_WF1SZ6n5JxyG2--XUY-Gcro7M_bMJyXdR-9kScBm9Drt7OWxpJp541kKpUz-52NAgJ5kjxZFFCtw_QuG9z3I7B1QVMQUPkjRGd6DbnjxZXRk-IySO6dgCqpWZ9l6Ppsw61U201we6vFv_3cPvc-18UCmY6MgsOexq_xBw8BVaUkAgAA"
    //     }
    // },
    // { // ---------------------------------- day 3
    //     title: "exported snippets",
    //     description: "You can now export snippets from a component's <script module>, for use in other components, as long as those snippets don't reference anything belonging to the component instance.",
    //     slug: "/day/1",
    //     externalLinks: {
    //         docs: "https://svelte.dev/docs/svelte/snippet#Exporting-snippets",
    //         demo: "https://svelte.dev/playground/16b7dd7105c248e59ec8a437697f588d?version=5.6.2"
    //     }
    // },
    // { // ---------------------------------- day 4
    //     title: "form control default values",
    //     description: "When you reset a form, the value of each <input> element reverts to its defaultValue. This is normally the empty string, but you can now control it directly in your template.",
    //     slug: "/day/1",
    //     externalLinks: {
    //         docs: "https://svelte.dev/docs/svelte/bind#input-bind:value",
    //         demo: "https://svelte.dev/playground/b30cfac16c3c4a3ab3d76ad20a5925cf?version=5.6.2"
    //     }
    // },
]