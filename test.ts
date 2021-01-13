import test from "ava";
import { command } from "execa";
import { DateTime } from "luxon";

test("docker run -> ubuntu iso date", async (t) => {
    const { stdout: actualOuput } = await command(
        "docker run --rm ubuntu date -I"
    );

    const expectedOuput = DateTime.local().toISODate();

    t.is(actualOuput, expectedOuput);
});
