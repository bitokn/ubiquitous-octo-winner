class Race:
    def __init__(self):
        self.duration, self.intervals = self.choose_duration()

    def __repr__(self):
        return f"duration {self.duration}, intervals: {self.intervals}"

    def create_run(self):
        peak_speed = float(input("enter peak running speed: "))
        speed_incline = []
        speed = peak_speed - (0.5 * (self.intervals - 1))
        incline = 0.0
        for interval in range(1, self.intervals + 1):
            speed_incline.append([speed, incline])
            speed += 0.5
            if interval % 2 == 0:
                incline += 0.5
        return speed_incline

    def display_run(self):
        for interval in self.create_run():
            print("{0:.1f} {1:.1f}".format(interval[0], interval[1]))

    def choose_duration(self):
        duration_chosen = False
        while not duration_chosen:
            duration = int(
                input("run duration (enter in increments of 5 minutes)")
            )  # aight just put an int there it isnt that hard
            if duration % 5 != 0:
                print("enter an increment of 5 minutes")
            else:
                duration_chosen = True
        intervals = duration // 5
        return duration, intervals


def main():
    race = Race()
    print(race)
    race.display_run()


main()
