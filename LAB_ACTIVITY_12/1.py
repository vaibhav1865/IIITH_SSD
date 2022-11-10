

import numpy as np
import csv as csv
from datetime import datetime


def read_mat_time(filename):
    time_stamps = []
    matrices = []
    with open(filename, 'r') as f:
        reader = csv.reader(f, delimiter='\n')

        for row in reader:
            if (len(row) == 0):
                break
            print(row[0])
            matrices.append((row[1:]))
            # time_stamps.append(row[0])
            # matrices.append(row[1:])
    return time_stamps, matrices

# This function takes a list of matrices and returns a list of lists
# Each list in the list of lists contains the indices of the non zero elements in the matrix
# The indices are stored as tuples (row, column)


def read_data(filename):
    time_stamps = []
    matrices = []
    # read first 42 lines append to time_stamps,matrices then skip blanks and read next 42 lines
    with open(filename, 'r') as f:
        reader = csv.reader(f, delimiter='\n')
        time_stamp = []
        matrix = []
        # count number of lines read

        for row in reader:
            if (len(row) == 0):
                time_stamps.append(time_stamp)
                matrices.append(matrix)
                time_stamp = []
                matrix = []
                while (len(row) == 0):
                    row = next(reader)
            else:
                # time_stamp.append(row[0])
                # matrix.append(row[1:])
                # delimeter of row = "/t"
                time_stamp.append(row[0].split("\t")[0])
                matrix.append(row[0].split("\t")[1:])
    # print(time_stamps)
    # print(matrices)
    # print(count)
    return time_stamps, matrices


def get_stride_len(matrices, time_stamps):

    first_non_zero = []
    first_step = []
    flag = 0
    for i in range(len(matrices)):
        for j in range(len(matrices[i])):
            for k in range(len(matrices[i][j])-1):
                if (matrices[i][j][k] != '0'):
                    first_non_zero.append([i, j, k])
                    first_step.append([i, j, k])
                    flag = 1
                    break
            if flag == 1:
                break
        if flag == 1:
            break
    # print("first_step", first_step)
    for i in range(first_non_zero[0][0], len(matrices)):
        if (matrices[i][first_non_zero[0][1]][first_non_zero[0][2]] == '0'):
            first_non_zero.append(
                [i, first_non_zero[0][1], first_non_zero[0][2]])
            break
    # print("first_non_zero", first_non_zero)

    second_step = []
    flag = 0
    for i in range(first_non_zero[1][0], len(matrices)):
        for j in range(first_non_zero[1][1], -1, -1):
            if (matrices[i][j][first_non_zero[1][2]] != '0'):
                second_step.append([i, j, first_non_zero[1][2]])
                flag = 1
                break
        if flag == 1:
            break

    stride_len = second_step[0][1] - first_step[0][1]

    t1 = datetime.strptime(
        time_stamps[first_step[0][0]][first_step[0][1]], '%H:%M:%S.%f')
    t2 = datetime.strptime(
        time_stamps[second_step[0][0]][second_step[0][1]], '%H:%M:%S.%f')
    # seconds difference between t1 and t2
    # print(t1, t2)
    t_diff = (t2 - t1).total_seconds()
    # absolute of t_diff
    t_diff = abs(t_diff)
    # print(t1)
    # print(t_diff)

    return abs(stride_len), t_diff


timestamp = []
matrices = []
timestamp, matrices = read_data('data.txt')

stride_len, time_diff = get_stride_len(matrices, timestamp)

print("stride length", stride_len)
# stride velocity in unit/s
stride_vel = stride_len / time_diff
print("stride velocity", stride_vel)
# cadence in steps/min
cadence = 180 / time_diff
print("cadence", cadence)
