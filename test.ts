import test from "ava";
import { command } from "execa";
import { DateTime } from "luxon";

test("docker run -> ubuntu iso date", async (t) => {
    const { stdout: actualOuput } = await command(
        "docker run --rm ubuntu date -d next\\ Friday -I"
    );

    const expectedOuput = DateTime.local()
        // next Friday
        .plus({ week: 1 })
        .set({ weekday: 5 })
        .toISODate();

    t.is(actualOuput, expectedOuput);
});
